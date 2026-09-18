import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, phone, email, eventType, date, message, source = 'Formulario Web' } = body;

        // Validaciones básicas
        if (!name || !phone) {
            return NextResponse.json(
                { success: false, error: 'Nombre y teléfono son obligatorios' },
                { status: 400 }
            );
        }

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        const cleanPhone = phone.replace(/[^0-9+]/g, '');
        const formattedDate = date || 'Sin fecha especificada';
        const formattedType = eventType || 'No especificado';
        const formattedMessage = message || 'Sin comentarios adicionales';

        // Mensaje enriquecido para Telegram
        const telegramMessage = `🎩 *¡NUEVO PRESUPUESTO EN ANGELRUIZ.WORLD!*
━━━━━━━━━━━━━━━━━━━━
👤 *Cliente:* ${name}
📱 *Teléfono:* \`${phone}\`
📧 *Email:* ${email || 'No proporcionado'}
🎉 *Tipo de Evento:* ${formattedType}
📅 *Fecha:* ${formattedDate}
💬 *Detalles:*
_"${formattedMessage}"_

📍 *Origen:* ${source}
⏰ *Hora:* ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
━━━━━━━━━━━━━━━━━━━━
📲 [Abrir WhatsApp con el Cliente](https://wa.me/${cleanPhone.startsWith('+') ? cleanPhone.replace('+', '') : (cleanPhone.startsWith('34') ? cleanPhone : '34' + cleanPhone)})`;

        // 1. Envío a Telegram si están configuradas las variables de entorno
        let telegramSent = false;
        if (botToken && chatId) {
            try {
                const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: telegramMessage,
                        parse_mode: 'Markdown',
                        disable_web_page_preview: true
                    })
                });
                const tgData = await tgRes.json();
                telegramSent = tgData.ok;
            } catch (tgErr) {
                console.error('Error al enviar a Telegram:', tgErr);
            }
        }

        // 2. Respaldo a Formspree para garantizar que nunca se pierda un cliente
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('phone', phone);
            formData.append('email', email || 'no-email@angelruiz.world');
            formData.append('eventType', formattedType);
            formData.append('date', formattedDate);
            formData.append('message', formattedMessage);
            formData.append('_subject', `Presupuesto: ${formattedType} - ${name} (${formattedDate})`);

            await fetch('https://formspree.io/f/xeoydngl', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
        } catch (fsErr) {
            console.warn('Respaldo Formspree omitido o con error:', fsErr);
        }

        return NextResponse.json({
            success: true,
            message: 'Solicitud procesada con éxito',
            telegramSent,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Error procesando formulario:', error);
        return NextResponse.json(
            { success: false, error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
