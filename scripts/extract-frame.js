/**
 * Extract a frame from the middle of the hero video using HTML5 Canvas.
 * This creates a simple HTML file that extracts a frame and downloads it.
 * Open this file in a browser, and it will extract the frame automatically.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3456;

const html = `<!DOCTYPE html>
<html>
<head><title>Frame Extractor</title></head>
<body>
<h2>Extrayendo frame del video...</h2>
<video id="video" muted style="display:none">
    <source src="/spring.mp4" type="video/mp4">
</video>
<canvas id="canvas" style="display:none"></canvas>
<p id="status">Cargando video...</p>
<img id="preview" style="max-width:100%">
<a id="download" style="display:none">Descargar imagen</a>
<script>
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const status = document.getElementById('status');
const preview = document.getElementById('preview');

video.addEventListener('loadedmetadata', () => {
    const midTime = video.duration / 2;
    status.textContent = 'Duración: ' + video.duration.toFixed(1) + 's. Buscando frame en ' + midTime.toFixed(1) + 's...';
    video.currentTime = midTime;
});

video.addEventListener('seeked', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        preview.src = url;
        
        // Auto-upload the blob back to the server
        const formData = new FormData();
        formData.append('image', blob, 'hero-poster.webp');
        
        fetch('/save-frame', {
            method: 'POST',
            body: blob,
            headers: { 'Content-Type': 'image/webp' }
        }).then(r => r.text()).then(msg => {
            status.textContent = '✅ ' + msg;
            // Auto-close after a small delay
            setTimeout(() => { 
                fetch('/shutdown');
            }, 2000);
        }).catch(err => {
            status.textContent = 'Guardado automático falló. Descargando...';
            const a = document.createElement('a');
            a.href = url;
            a.download = 'hero-poster.webp';
            a.click();
        });
    }, 'image/webp', 0.92);
});

video.load();
</script>
</body>
</html>`;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    } else if (req.url === '/spring.mp4') {
        const filePath = path.join(__dirname, '..', 'public', 'spring.mp4');
        const stat = fs.statSync(filePath);
        res.writeHead(200, {
            'Content-Type': 'video/mp4',
            'Content-Length': stat.size
        });
        fs.createReadStream(filePath).pipe(res);
    } else if (req.url === '/save-frame' && req.method === 'POST') {
        const chunks = [];
        req.on('data', chunk => chunks.push(chunk));
        req.on('end', () => {
            const buffer = Buffer.concat(chunks);
            const outPath = path.join(__dirname, '..', 'public', 'images', 'hero-poster.webp');
            fs.writeFileSync(outPath, buffer);
            console.log('Frame saved to:', outPath, '(' + buffer.length + ' bytes)');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Frame guardado en public/images/hero-poster.webp (' + (buffer.length / 1024).toFixed(0) + ' KB)');
        });
    } else if (req.url === '/shutdown') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Shutting down...');
        setTimeout(() => process.exit(0), 500);
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(PORT, () => {
    console.log('\\n🎬 Frame extractor running at http://localhost:' + PORT);
    console.log('📱 Open this URL in your browser to extract the video frame.');
    console.log('   The frame will be saved automatically to public/images/hero-poster.webp\\n');
});
