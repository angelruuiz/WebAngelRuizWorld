from PIL import Image
import sys

def remove_white_bg(img_path, out_path, tolerance=230):
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()
    new_data = []
    for item in data:
        if item[0] >= tolerance and item[1] >= tolerance and item[2] >= tolerance:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.save(out_path, "PNG")
    print("Done")

remove_white_bg("public/pablosogo/WhatsApp Image 2026-06-06 at 17.59.40.jpeg", "public/pablosogo/old_logo_transparente.png")
