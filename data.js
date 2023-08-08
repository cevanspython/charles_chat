const jsonData = {
  "topics": [

    {
      "key": "user_instructions",
      "topic": "_Instructions",
      "link": "",
      "code": "This tool provides python code examples selected to help chatgpt produce better code. Select items from the menu then copy the output to use in your chatgpt code prompts."
      },
      {
      "key": "chatgpt_prompt",
      "topic": "_Make code snippets",
      "link": "",
      "code": "chatgpt: make python code snippets for each of the following topics."
      },
      {
    "key": "adafruit_apds9960.apds9960.APDS9960",
    "topic": "I2C sensor - 5 variables",
    "link": "https://docs.circuitpython.org/projects/apds9960/en/latest/api.html#apds9960",
    "code": "import board import time import adafruit_apds9960.apds9960 as apds9960 i2c = board.I2C() apds = apds9960.APDS9960(i2c) apds.enable_color = True apds.enable_proximity = True apds.enable_gesture = True apds.rotation = 90 while True:   red, green, blue, clear = apds.color_data   print(\"Color Data (RGB):\", red, green, blue)   proximity = apds.proximity   print(\"Proximity:\", proximity)   gesture = apds.gesture()   print(\"Gesture:\", gesture)   apds.clear_interrupt()   time.sleep(0.1)"
    },
    {
    "key": "adafruit_bitmap_font",
    "topic": "Text - fonts",
    "link": "https://docs.circuitpython.org/projects/display_text/en/latest/api.html#adafruit-display-text-bitmap-label",
    "code": "import board; from adafruit_display_text import label; from adafruit_bitmap_font import bitmap_font; display = board.DISPLAY; font_file = \"fonts/LeagueSpartan-Bold-16.bdf\"; text = \"HELLO WORLD\"; font = bitmap_font.load_font(font_file); color = 0xFF00FF; text_area = label.Label(font, text=text, color=color); text_area.x = 20; text_area.y = 20; display.show(text_area); while True: pass;"
    },
    {
    "key": "adafruit_ble.ble.start_scan",
    "topic": "Bluetooth - scan for device",
    "link": "https://docs.circuitpython.org/projects/ble/en/latest/api.html#adafruit_ble.BLERadio.start_scan",
    "code": "import time; import board; import busio; from adafruit_ble import BLERadio; i2c = busio.I2C(board.SCL, board.SDA); ble = BLERadio(); while True:  print(\"Scanning for Bluetooth devices...\"); devices = ble.start_scan(timeout=5); for device in devices:    print(\"Address:\", device.address); print(\"RSSI:\", device.rssi);  ble.stop_scan();  time.sleep(5);"
    },
    {
    "key": "adafruit_bmp280.Adafruit_BMP280_I2C",
    "topic": "I2C sensor - 2 variables",
    "link": "https://docs.circuitpython.org/projects/bmp280/en/latest/api.html#adafruit_bmp280.Adafruit_BMP280_I2C",
    "code": "import board; import adafruit_bmp280; import time; i2c = board.I2C(); bmp280 = adafruit_bmp280.Adafruit_BMP280_I2C(i2c); bmp280.sea_level_pressure = 1013.25; while True: temperature = bmp280.temperature; pressure = bmp280.pressure; print(\"Temperature:\", temperature, \"°C\"); print(\"Pressure:\", pressure, \"hPa\"); time.sleep(0.5);"
    },
    {
    "key": "adafruit_bitmap_font",
    "topic": "Text - fonts bitmap",
    "link": "https://docs.circuitpython.org/projects/display_text/en/latest/api.html#adafruit-display-text-bitmap-label",
    "code": "import board from adafruit_display_text import label from adafruit_bitmap_font import bitmap_font    display = board.DISPLAY font_file = \"fonts/LeagueSpartan-Bold-16.bdf\" text = \"HELLO WORLD\"    font = bitmap_font.load_font(font_file) color = 0xFF00FF text_area = label.Label(font, text=text,    color=color) text_area.x = 20 text_area.y = 20 display.show(text_area) while True: pass"
    },
    {
    "key": "adafruit_ble.ble.start_scan",
    "topic": "Bluetooth - scan for device",
    "link": "https://docs.circuitpython.org/projects/ble/en/latest/api.html#adafruit_ble.BLERadio.start_scan",
    "code": "import time import board import busio from adafruit_ble import BLERadio i2c = busio.I2C(board.SCL, board.SDA) ble = BLERadio() while True:    print(\"Scanning for Bluetooth devices...\") devices = ble.start_scan(timeout=5)    for device in devices: print(\"Address:\", device.address) print(\"RSSI:\", device.rssi)    ble.stop_scan() time.sleep(5)"
    },
    {
    "key": "adafruit_bmp280.Adafruit_BMP280_I2C",
    "topic": "I2C sensor - 1 variable",
    "link": "https://docs.circuitpython.org/projects/bmp280/en/latest/api.html#adafruit_bmp280.Adafruit_BMP280_I2C",
    "code": "import board import adafruit_bmp280 import time i2c = board.I2C() bmp280 = adafruit_bmp280.Adafruit_BMP280_I2C(i2c) bmp280.sea_level_pressure = 1013.25    while True: temperature = bmp280.temperature pressure = bmp280.pressure    print(\"Temperature:\", temperature, \"°C\") print(\"Pressure:\", pressure, \"hPa\") time.sleep(0.5)"
    },
    {
    "key": "adafruit feather sense nrf52",
    "topic": "Adafruit Feather - Sense nrf52",
    "link": "https://cdn-learn.adafruit.com/downloads/pdf/adafruit-feather-sense.pdf",
    "code": "Dimensions: 51mm x 23mm x 7.2mm GPIO pins: 28 Processor: 3V ARM Cortex M4F 64MHz Flash memory: 1MB SRAM: 256KB Bluetooth: Nordic nRF52840 Bluetooth LE 2.4GHz radio bootloader: CircuitPython UF2 bootloader 8.0.3 ADC pins: 6 LEDs: Red LED status indicator User-defined blue LED NeoPixel RGB LED Power: LiPo battery (3.5-4.2V JST PH connector) Micro USB port (4.5-5.2V) LSM6DS33 I2C gyro and accelerometer LIS3MDL I2C magnetometer APDS9960 light sensor SHT30 humidity and temperature sensor, BMP280 temperature and pressure sensor MP34DT01-M PDM microphone Buttons: User-defined button, Reset button"
    },
    {
    "key": "adafruit_hid.keyboard",
    "topic": "Keyboard - emulate usb device",
    "link": "https://docs.circuitpython.org/projects/hid/en/latest/api.html#adafruit-hid-keyboard-keyboard",
    "code": "from adafruit_hid.keycode import Keycode keyboard = Keyboard(usb_hid.devices) import board import usb_hid from adafruit_hid.keyboard import Keyboard keyboard.press(Keycode.A) keyboard.release_all()"
    },
    {
    "key": "adafruit_lis3mdl.LIS3MDL",
    "topic": "I2C Sensor - 3 variables",
    "link": "https://learn.adafruit.com/lis3mdl-triple-axis-magnetometer/python-circuitpython",
    "code": "import board import adafruit_lis3mdl i2c = board.I2C() lis3mdl = adafruit_lis3mdl.LIS3MDL(i2c) while True: mx, my, mz = lis3mdl.magnetic print(mx, my, mz)"
    },
    {
    "key": "adafruit_lsm6ds.LSM6DS",
    "topic": "I2C Sensor - 6 variables",
    "link": "https://docs.circuitpython.org/projects/lsm6dsox/en/latest/api.html#adafruit_lsm6ds.LSM6DS",
    "code": "import board import adafruit_lsm6ds.lsm6ds33 i2c = board.I2C() lsm6ds33 = adafruit_lsm6ds.lsm6ds33.LSM6DS33(i2c) lsm6ds33.accelerometer_range = adafruit_lsm6ds.AccelRange.RANGE_2G lsm6ds33.accelerometer_data_rate = adafruit_lsm6ds.Rate.RATE_26_HZ lsm6ds33.gyro_data_rate = adafruit_lsm6ds.Rate.RATE_52_HZ lsm6ds33.pedometer_enable = True while True: accel_x, accel_y, accel_z = lsm6ds33.acceleration print(\"Acceleration:\", accel_x, accel_y, accel_z) gyro_x, gyro_y, gyro_z = lsm6ds33.gyro print(\"Gyroscope:\", gyro_x, gyro_y, gyro_z) pedometer_steps = lsm6ds33.pedometer_steps print(\"Pedometer Steps:\", pedometer_steps) temperature = lsm6ds33.temperature print(\"Temperature:\", temperature)"
    },
    {
    "key": "adafruit_bus_device.i2c_device.I2CDevice",
    "topic": "I2C Device - read write",
    "link": "https://docs.circuitpython.org/projects/busdevice/en/latest/api.html#adafruit_bus_device.i2c_device.I2CDevice",
    "code": "import busio from board import SCL, SDA from adafruit_bus_device.i2c_device import I2CDevice with busio.I2C(SCL, SDA) as i2c: device = I2CDevice(i2c, 0x1c) bytes_read = bytearray(4) with device: device.readinto(bytes_read) with device: device.write(bytes_read)"
    },
    {
    "key": "adafruit_bus_device.i2c_device.I2CDevice.write_then_readinto",
    "topic": "I2C Device - write read",
    "link": "https://docs.circuitpython.org/projects/busdevice/en/latest/api.html#adafruit_bus_device.i2c_device.I2CDevice.write_then_readinto",
    "code": "import board import busio import adafruit_bus_device.i2c_device as i2c_device i2c = busio.I2C(board.SCL, board.SDA) device_address = 0x1c output_data = bytes([0x01, 0x02, 0x03]) input_data = bytearray(4) device = i2c_device.I2CDevice(i2c, device_address) with device: device.write_then_readinto(output_data, input_data) print(\"Output data:\", output_data) print(\"Input data:\", input_data)"
    },
    {
    "key": "adafruit_bus_device.spi_device.SPIDevice",
    "topic": "SPI Device - read write",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/adafruit_bus_device/spi_device/index.html",
    "code": "import busio import digitalio from board import * from adafruit_bus_device.spi_device import SPIDevice with busio.SPI(SCK, MOSI, MISO) as spi_bus: cs = digitalio.DigitalInOut(D10) device = SPIDevice(spi_bus, cs) bytes_read = bytearray(4) with device as spi: spi.readinto(bytes_read) with device as spi: spi.write(bytes_read)"
    },
    {
    "key": "adafruit_pixelbuf.PixelBuf",
    "topic": "Neopixel - led control",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/adafruit_pixelbuf/index.html",
    "code": "import adafruit_pixelbuf import board import neopixel pixel_pin = board.NEOPIXEL pixelbuf = adafruit_pixelbuf.PixelBuf(10, byteorder=\"RGB\") pixelbuf.brightness = 0.5 pixels = neopixel.NeoPixel(pixel_pin, 10) pixelbuf.fill((255, 0, 0)) for i in range(len(pixelbuf)): pixels[i] = pixelbuf[i] pixelbuf[5] = (0, 255, 0) pixels[5] = pixelbuf[5] pixel_color = pixelbuf[2] print(\"Pixel color at index 2:\", pixel_color) pixels.show()"
    },
    {
    "key": "audioio.AudioOut math.sin audiocore.RawSample",
    "topic": "Audio - tone output",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/audioio/index.html",
    "code": "import audiocore import audioio import board import array import time import math length = 8000 // 440 sine_wave = array.array(\"H\", [0] * length) for i in range(length): sine_wave[i] = int(math.sin(math.pi * 2 * i / length) * (2 ** 15) + 2 ** 15) dac = audioio.AudioOut(board.SPEAKER) sine_wave = audiocore.RawSample(sine_wave, sample_rate=8000) dac.play(sine_wave, loop=True) time.sleep(1) dac.stop()"
    },
    {
    "key": "audiomixer.Mixer",
    "topic": "Audio - mix wav files",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/audiomixer/index.html",
    "code": "import board import audioio import audiocore import audiomixer import digitalio import time a = audioio.AudioOut(board.A0) music = audiocore.WaveFile(open(\"cplay-5.1-16bit-16khz.wav\", \"rb\")) drum = audiocore.WaveFile(open(\"drum.wav\", \"rb\")) mixer = audiomixer.Mixer(voice_count=2, sample_rate=16000, channel_count=1, bits_per_sample=16, samples_signed=True) print(\"Playing\") a.play(mixer) mixer.voice[0].play(music) while mixer.playing: mixer.voice[1].play(drum) time.sleep(1) print(\"Stopped\")"
    },
    {
    "key": "adafruit_cursorcontrol.cursorcontrol",
    "topic": "Cursor - movement",
    "link": "https://docs.circuitpython.org/projects/cursorcontrol/en/latest/api.html#adafruit-cursorcontrol-cursorcontrol",
    "code": "import time import board import displayio from adafruit_cursorcontrol.cursorcontrol import Cursor from adafruit_cursorcontrol.cursorcontrol_cursormanager import CursorManager display=board.DISPLAY splash=displayio.Group() mouse_cursor=Cursor(display,display_group=splash) cursor=CursorManager(mouse_cursor) display.show(splash) while True:cursor.update() if cursor.is_clicked: if mouse_cursor.hidden:mouse_cursor.show() else:mouse_cursor.hide() time.sleep(0.01)"
    },
    {
    "key": "adafruit_display_shapes",
    "topic": "Shapes - draw basic shapes",
    "link": "https://docs.circuitpython.org/projects/display-shapes/en/latest/index.html",
    "code": "import board import displayio from adafruit_display_shapes.rect import Rect from adafruit_display_shapes.circle import Circle from adafruit_display_shapes.roundrect import RoundRect from adafruit_display_shapes.triangle import Triangle from adafruit_display_shapes.line import Line from adafruit_display_shapes.polygon import Polygon"
    },
    {
    "key": "adafruit_display_shapes.circle",
    "topic": "Shapes - draw circle",
    "link": "https://docs.circuitpython.org/projects/display-shapes/en/latest/api.html#adafruit_display_shapes.circle.Circle",
    "code": "import board import displayio from adafruit_display_shapes.circle import Circle display=board.DISPLAY group=displayio.Group() circle=Circle(64,64,50,outline=0xFFFFFF,fill=0xFF0000,stroke=2) group.append(circle) display.show(group) while True:pass"
    },
    {
    "key": "adafruit_display_shapes.line",
    "topic": "Shapes - draw line",
    "link": "https://docs.circuitpython.org/projects/display-shapes/en/latest/api.html#line",
    "code": "import board import displayio from adafruit_display_shapes.line import Line display=board.DISPLAY group=displayio.Group() line=Line(20,20,100,80,color=0xFFFFFF) group.append(line) display.show(group) while True:pass"
    },
    {
    "key": "adafruit_display_shapes.rect",
    "topic": "Shapes - draw rectangle solid",
    "link": "https://docs.circuitpython.org/projects/display-shapes/en/latest/api.html#rect",
    "code": "import board import displayio from adafruit_display_shapes.rect import Rect display=board.DISPLAY group=displayio.Group() rect=Rect(20,20,100,80,outline=0xFFFFFF,fill=0x00FF00,stroke=2) group.append(rect) display.show(group) while True:pass"
    },
    {
    "key": "adafruit_display_shapes.rect.Rect",
    "topic": "Shapes - draw rectangle outline",
    "link": "https://docs.circuitpython.org/projects/display-shapes/en/latest/api.html#adafruit_display_shapes.rect.Rect",
    "code": "import board import displayio from adafruit_display_shapes.rect import Rect disp = board.DISPLAY root = displayio.Group() rect1 = Rect(0, 0, 100, 50, fill=0xFF0000) root.append(rect1) disp.show(root) while True: pass"
    },
    {
    "key": "adafruit_display_shapes.roundrect",
    "topic": "Shapes - draw rectangle rounded",
    "link": "https://docs.circuitpython.org/projects/display-shapes/en/latest/api.html#roundrect",
    "code": "import board import displayio from adafruit_display_shapes.roundrect import RoundRect display = board.DISPLAY group = displayio.Group() roundrect = RoundRect(20, 20, 100, 80, 10, outline=0xFFFFFF, fill=0x00FF00, stroke=2) group.append(roundrect) display.show(group) while True: pass"
    },
    {
    "key": "adafruit_display_shapes.sparkline",
    "topic": "Shapes - draw graph sparkline",
    "link": "https://docs.circuitpython.org/projects/display-shapes/en/latest/examples.html#sparkline-simple-test",
    "code": "import time import random import board import displayio from adafruit_display_shapes.sparkline import Sparkline chart_width = board.DISPLAY.width chart_height = board.DISPLAY.height sparkline1 = Sparkline(width=chart_width, height=chart_height, max_items=40, y_min=0, y_max=10, x=0, y=0) my_group = displayio.Group() my_group.append(sparkline1) board.DISPLAY.show(my_group) while True: board.DISPLAY.auto_refresh = False sparkline1.add_value(random.uniform(0, 10)) board.DISPLAY.auto_refresh = True time.sleep(0.01)"
    },
    {
    "key": "adafruit_display_shapes.triangle",
    "topic": "Shapes - draw tringle",
    "link": "https://docs.circuitpython.org/projects/display-shapes/en/latest/api.html#triangle",
    "code": "import board, displayio, adafruit_display_shapes.triangle.Triangle display = board.DISPLAY group = displayio.Group() triangle = Triangle(20, 20, 100, 80, 60, 120, outline=0xFFFFFF, fill=0x00FF00) group.append(triangle) display.show(group) while True: pass"
    },
    {
    "key": "adafruit_display_text",
    "topic": "Text - display text",
    "link": "https://cdn-learn.adafruit.com/downloads/pdf/circuitpython-display_text-library.pdf",
    "code": "import board import terminalio import displayio from adafruit_display_text import label display = board.DISPLAY group = displayio.Group() display.show(group) text = \"Hello, world!\" x, y = 20, 20 font = terminalio.FONT color = 0xFFFFFF background_color = 0x000000 label_obj = label.Label(font, text=text, color=color, background_color=background_color, x=x, y=y) group.append(label_obj) while True: pass"
    },
    {
    "key": "adafruit_display_text.LabelBase",
    "topic": "Text - make label",
    "link": "https://docs.circuitpython.org/projects/display_text/en/latest/api.html",
    "code": "import board import terminalio from adafruit_display_text import label from adafruit_display_text import wrap_text_to_lines display = board.DISPLAY text = ( \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, \" \"sed do eiusmod tempor incididunt ut labore et dolore magna \" \"aliqua. Ut enim ad minim veniam, quis nostrud exercitation \" \"ullamco laboris nisi ut aliquip ex ea commodo consequat.\" ) text = \"\\n\".join(wrap_text_to_lines(text, 28)) text_area = label.Label(terminalio.FONT, text=text) text_area.x = 10 text_area.y = 10 display.show(text_area) while True: pass"
    },
    {
    "key": "adafruit_display_text.scrolling_label",
    "topic": "Text - scroll label",
    "link": "https://docs.circuitpython.org/projects/display_text/en/latest/api.html#adafruit-display-text-scrolling-label",
    "code": "import board import terminalio from adafruit_display_text.scrolling_label import ScrollingLabel text = \"Hello World\" my_scrolling_label = ScrollingLabel(terminalio.FONT, text=text, max_characters=20, animate_time=0.3) my_scrolling_label.x = 10 my_scrolling_label.y = 10 board.DISPLAY.show(my_scrolling_label) while True: my_scrolling_label.update()"
    },
    {
    "key": "adafruit feather sense nrf52",
    "topic": "adafruit feather sense hardware",
    "link": "https://learn.adafruit.com/adafruit-feather-sense/pinouts",
    "code": "pin 1 reset, pin 2 3.3v, pin 3 aref, pin 4 ground, pin 5 a0, pin 6 a1, pin 7 a2, pin 8 a3, pin 9 a4, pin 10 a5, pin 11 sck, pin 12 mosi, pin 13 miso, pin 14 rx, pin 15 tx, pin 16 d2, pin 17 sda, pin 18 scl, pin 19 d5, pin 20 d6, pin 21 d9, pin 22 d10, pin 23 d11, pin 24 d12, pin 25 d13, pin 26 vbus, pin 27 en, pin 28 vbat."
    },
    {
    "key": "adafruit_hashlib",
    "topic": "Text - encrypt text",
    "link": "https://docs.circuitpython.org/projects/hashlib/en/latest/api.html#adafruit-hashlib",
    "code": "import adafruit_hashlib as hashlib\n\nbyte_string = b\"CircuitPython\"\nm = hashlib.md5()\nm.update(byte_string)\nprint(\"MD5 Digest:\", m.hexdigest())\n\nm = hashlib.sha256()\nm.update(byte_string)\nprint(\"SHA256 Digest:\", m.hexdigest())"
    },
    {
    "key": "adafruit_hashlib.new",
    "topic": "Text - hashlib create",
    "link": "https://docs.circuitpython.org/projects/hashlib/en/latest/api.html#adafruit_hashlib.new",
    "code": "import adafruit_hashlib\n\ndata = b\"hello world\"\nhash_obj = adafruit_hashlib.new('sha256', data)\nprint(hash_obj.hexdigest())"
    },
    {
    "key": "adafruit_miniqr.QRCode",
    "topic": "QR Code - display",
    "link": "https://docs.circuitpython.org/projects/miniqr/en/latest/api.html#adafruit-miniqr",
    "code": "import board\nimport displayio\nimport adafruit_miniqr\n\ndef bitmap_QR(matrix):\n    BORDER_PIXELS = 2\n    bitmap = displayio.Bitmap(matrix.width + 2 * BORDER_PIXELS, matrix.height + 2 * BORDER_PIXELS, 2)\n    for y in range(matrix.height):\n        for x in range(matrix.width):\n            if matrix[x, y]:\n                bitmap[x + BORDER_PIXELS, y + BORDER_PIXELS] = 1\n            else:\n                bitmap[x + BORDER_PIXELS, y + BORDER_PIXELS] = 0\n    return bitmap\n\n\nqr = adafruit_miniqr.QRCode(qr_type=3, error_correct=adafruit_miniqr.L)\nqr.add_data(b\"https://www.adafruit.com/circuitpython\")\nqr.make()\nqr_bitmap = bitmap_QR(qr.matrix)\n\npalette = displayio.Palette(2)\npalette[0] = 0xFFFFFF\npalette[1] = 0x000000\n\nscale = min(board.DISPLAY.width // qr_bitmap.width, board.DISPLAY.height // qr_bitmap.height)\npos_x = int(((board.DISPLAY.width / scale) - qr_bitmap.width) / 2)\npos_y = int(((board.DISPLAY.height / scale) - qr_bitmap.height) / 2)\n\nqr_img = displayio.TileGrid(qr_bitmap, pixel_shader=palette, x=pos_x, y=pos_y)\n\nsplash = displayio.Group(scale=scale)\nsplash.append(qr_img)\n\nboard.DISPLAY.show(splash)\n\nwhile True:\n    pass"
    },
    {
    "key": "adafruit_sdcard",
    "topic": "SD Card - read",
    "link": "https://docs.circuitpython.org/projects/sd/en/latest/",
    "code": "import board, busio, digitalio, adafruit_sdcard, storage\n\n\nspi = busio.SPI(board.SCK, board.MOSI, board.MISO)\ncs = digitalio.DigitalInOut(board.SD_CS)\nsd_card = adafruit_sdcard.SDCard(spi, cs)\nvfs = storage.VfsFat(sd_card)\nstorage.mount(vfs, \"/sd\")\n\nwith open(\"/sd/data.txt\", \"r\") as f:\n    contents = f.read()\n    print(contents)"
    },
    {
    "key": "analogio.AnalogIn",
    "topic": "Input - Joystick",
    "link": "https://cdn-learn.adafruit.com/downloads/pdf/adafruit-pygamer.pdf",
    "code": "import board\nimport analogio\n\nx_axis = analogio.AnalogIn(board.JOYSTICK_X)\ny_axis = analogio.AnalogIn(board.JOYSTICK_Y)\n\nlast_x = x_axis.value\nlast_y = y_axis.value\n\nwhile True:\n    x_val = x_axis.value\n    y_val = y_axis.value\n\n    if abs(x_val - last_x) > 200 or abs(y_val - last_y) > 200:\n        last_x = x_val\n        last_y = y_val"
    },
    {
    "key": "adafruit pygamer hardware",
    "topic": "adafruit pygamer hardware",
    "link": "https://cdn-learn.adafruit.com/downloads/pdf/adafruit-pygamer.pdf",
    "code": "ATSAMd51j19, Arm Cortex-M4, 120MHz, 3.3V logic power, 512KB flash, 192KB RAM, 8MB QSPI flash, microSD card slot, 1.8\" 160x128 color TFT display, 1 analog thumbstick, 4 game/control buttons, 5 neopixels, triple-axis accelerometer, light sensor, stereo headphone jack, mono Class-D speaker driver, lipoly battery port with built-in charging, USB micro port, 2 female header strips with Feather-compatible pinout, JST ports for I2C, reset button, on-off switch."
    },
    {
    "key": "adafruit pygamer pinouts",
    "topic": "adafruit pygamer pins physical",
    "link": "https://learn.adafruit.com/adafruit-pygamer/pinouts",
    "code": "pin 1 reset, pin 2 3.3v, pin 3 aref, pin 4 ground, pin 5 a0, pin 6 a1 tx, pin 7 a2 rx, pin 8 a3, pin 9 a4, pin 10 a5, pin 11 sck, pin 12 mosi, pin 13 miso, pin 14 d0, pin 15 d1, pin 16 d4, pin 17 sda, pin 18 scl, pin 19 d5, pin 20 d6, pin 21 d9, pin 22 d10, pin 23 d11, pin 24 d12, pin 25 led, pin 26 vbus, pin 27 en, pin 28 vbat"
    },
    {
    "key": "adafruit pygamer pinouts",
    "topic": "adafruit pygamer pins software",
    "link": "https://learn.adafruit.com/adafruit-pygamer/pinouts",
    "code": "A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, ACCELEROMETER_INTERRUPT, BUTTON_CLOCK, BUTTON_LATCH, BUTTON_OUT, D0, D1, D10, D11, D12, D13, D2, D3, D4, D5, D6, D7, D8, D9, DISPLAY, I2C, JOYSTICK_X, JOYSTICK_Y, LED, LIGHT, MISO, MOSI, NEOPIXEL, RX, SCK, SCL, SDA, SD_CS, SPEAKER, SPEAKER_ENABLE, SPI, STEMMA_I2C, TFT_CS, TFT_DC, TFT_LITE, TFT_MOSI, TFT_RST, TFT_SCK, TX, UART, board_id"
    },
    {
    "key": "adafruit pygamer modules",
    "topic": "adafruit pygamer core software",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/support_matrix.html",
    "code": "import _asyncio import _bleio import _pixelmap import _stage import adafruit_bus_device import adafruit_pixelbuf import alarm import analogio import array import atexit import audiobusio import audiocore import audioio import audiomixer import audiomp3 import binascii import bitbangio import bitmaptools import board import builtins import busio import collections import countio import digitalio import displayio import errno import floppyio import fontio import frequencyio import getpass import i2c_target import json import keypad import math import microcontroller import msgpack import neopixel_write import nvm import onewireio import os import paralleldisplay import ps2io import pulseio import pwmio import rainbowio import random import re import rotaryio import rtc import samd import sdcardio import select import storage import struct import supervisor import synthio import sys import terminalio import time import touchio"
    },
    {
    "key": "adafruit pygamer adc pwm",
    "topic": "motor control with potentiometer",
    "link": "https://learn.adafruit.com/circuitpython-essentials/circuitpython-pwm",
    "code": "import time import board import pwmio import analogio potentiometer = analogio.AnalogIn(board.A1) motor = pwmio.PWMOut(board.D9, frequency=5000, duty_cycle=0) def adc_to_duty_cycle(adc_value): return int(adc_value / 65535 * 65535) while True: pot_value = potentiometer.value duty_cycle = adc_to_duty_cycle(pot_value) motor.duty_cycle = duty_cycle print(\"Potentiometer value:\", pot_value, \"Motor duty cycle:\", duty_cycle) time.sleep(0.1)"
    },
    {
    "key": "adafruit_sht31d.SHT31D",
    "topic": "i2c sensor with two outputs",
    "link": "https://docs.circuitpython.org/projects/sht31d/en/latest/api.html",
    "code": "import board import adafruit_sht31d import time i2c = board.I2C() sht31d = adafruit_sht31d.SHT31D(i2c) while True: humidity = sht31d.relative_humidity temperature = sht31d.temperature print(humidity) print(temperature) time.sleep(0.1)"
    },
    {
    "key": "aesio.AES",
    "topic": "text encryption decryption.",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/aesio/index.html",
    "code": "import aesio from binascii import hexlify key = b'Sixteen byte key' inp = b'CircuitPython!!!' outp = bytearray(len(inp)) cipher = aesio.AES(key, aesio.MODE_ECB) cipher.encrypt_into(inp, outp) print(\"Input:\", inp) print(\"Encrypted Output:\", hexlify(outp))"
    },
    {
    "key": "alarm.time.TimeAlarm",
    "topic": "alarm time set",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/alarm/time/index.html",
    "code": "import alarm import time import board print(\"Waking up\") time_alarm = alarm.time.TimeAlarm(monotonic_time=time.monotonic() + 60) wake_alarm = alarm.light_sleep_until_alarms(time_alarm) print(\"Woke up from alarm:\", wake_alarm) print(\"Performing post-wake-up operations...\") time.sleep(1) print(\"Done!\") alarm.exit_and_deep_sleep_until_alarms(time_alarm)"
    },
    {
    "key": "alarm.pin.PinAlarm",
    "topic": "alarm pin set",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/alarm/pin/index.html#module-alarm.pin",
    "code": "import alarm import time import board print(\"Waking up\") pin = board.D7 pin_alarm = alarm.pin.PinAlarm(pin, value=True, edge=False) wake_alarm = alarm.light_sleep_until_alarms(pin_alarm) print(\"Woke up from pin alarm:\", wake_alarm) print(\"Performing post-wake-up operations...\") time.sleep(1) print(\"Done!\") alarm.exit_and_deep_sleep_until_alarms(pin_alarm)"
    },
    {
    "key": "alarm.time.TimeAlarm",
    "topic": "alarm time set",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/alarm/time/index.html",
    "code": "import alarm import time print(\"Setting up the time alarm\") target_time = time.monotonic() + 60 time_alarm = alarm.time.TimeAlarm(monotonic_time=target_time) wake_alarm = alarm.light_sleep_until_alarms(time_alarm) if wake_alarm == time_alarm: print(\"Time alarm triggered!\") print(\"Performing post-wake-up operations...\") time.sleep(1) print(\"Done!\")"
    },
    {
    "key": "audiobusio.PDMIn",
    "topic": "audio input pins",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/audiobusio/index.html",
    "code": "import time import audiobusio import board import array mic = audiobusio.PDMIn(board.MICROPHONE_CLOCK, board.MICROPHONE_DATA, sample_rate=16000, bit_depth=16) NUM_SAMPLES = 16000 while True: samples = array.array('H', [0] * NUM_SAMPLES) mic.record(samples, len(samples)) max_value = max(samples) print(max_value) time.sleep(0.1)"
    },
    {
    "key": "audiobusio.PDMIn",
    "topic": "audio input pins",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/audiobusio/index.html",
    "code": "import time import audiobusio import board import array\nmic = audiobusio.PDMIn(board.MICROPHONE_CLOCK, board.MICROPHONE_DATA, sample_rate=16000, bit_depth=16)\nwhile True: samples = array.array('H', [0] * 160) mic.record(samples, len(samples)) mic_value = max(samples)\nprint(mic_value) time.sleep(0.1)"
    },
    {
    "key": "bitmaptools.arrayblit",
    "topic": "Insert pixels from data into rectangle",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/bitmaptools/index.html#bitmaptools.arrayblit",
    "code": "import board\nimport displayio\nimport bitmaptools\nimport array\ndisplay = board.DISPLAY\nbmp = displayio.Bitmap(100, 100, 2)\npalette = displayio.Palette(2)\npalette[0] = 0x000000\npalette[1] = 0xFFFFFF\ntilegrid = displayio.TileGrid(bmp, pixel_shader=palette, x=70, y=70)\ngroup = displayio.Group()\ngroup.append(tilegrid)\ndisplay.show(group)\ndata = array.array('B', [1] * 5000 + [0] * (100 * 100 - 5000))\nbitmaptools.arrayblit(bmp, data)\nwhile True:\n    pass"
    },
    {
    "key": "bitmaptools.draw_polygon",
    "topic": "draw polygon on display",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/bitmaptools/index.html#bitmaptools.draw_polygon",
    "code": "import board\nimport displayio\nimport bitmaptools\ndisplay = board.DISPLAY\nbmp = displayio.Bitmap(128, 128, 3)\npalette = displayio.Palette(3)\npalette[0] = 0xFFFFFF\npalette[1] = 0x0000FF\npalette[2] = 0xFF0000\ntilegrid = displayio.TileGrid(bmp, pixel_shader=palette)\ngroup = displayio.Group()\ngroup.append(tilegrid)\ndisplay.show(group)\nbmp.fill(0)\nbitmaptools.draw_polygon(bmp, bytes([4, 101, 101, 19]), bytes([4, 19, 121, 101]), 1)\nbitmaptools.draw_polygon(bmp, bytes([14, 60, 110]), bytes([14, 24, 90]), 2)\nwhile True:\n    pass"
    },
    {
    "key": "bitmaptools.rotozoom",
    "topic": "Bitmap - pixels insert into",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/bitmaptools/index.html#bitmaptools.rotozoom",
    "code": "import bitmaptools\nimport displayio\nimport board\nimport math\npalette = displayio.Palette(2)\npalette[0] = 0x000000\npalette[1] = 0xFFFFFF\nbitmap1 = displayio.Bitmap(170, 170, 2)\nbitmap2 = displayio.Bitmap(240, 240, 2)\nfor x in range(170):\n    for y in range(170):\n        bitmap1[x, y] = (x + y) % 2\npx, py = (85, 85)\nox, oy = (120, 120)\ndest_clip0 = (0, 0)\ndest_clip1 = (240, 240)\nsource_clip0 = (0, 0)\nsource_clip1 = (170, 170)\nangle = math.pi / 4\nscale = 1.0\nskip_index = None\nbitmaptools.rotozoom(dest_bitmap=bitmap2, source_bitmap=bitmap1, ox=ox, oy=oy, dest_clip0=dest_clip0, dest_clip1=dest_clip1, px=px, py=py, source_clip0=source_clip0, source_clip1=source_clip1, angle=angle, scale=scale, skip_index=skip_index)\ntile_grid = displayio.TileGrid(bitmap2, pixel_shader=palette)\ngroup = displayio.Group()\ngroup.append(tile_grid)\nboard.DISPLAY.show(group)\nwhile True:\n    pass"
    },
    {
    "key": "board.DISPLAY.refresh",
    "topic": "Display - refresh rate set",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Display.refresh",
    "code": "import board\nimport displayio\ndisp = board.DISPLAY\nupdated = disp.refresh(target_frames_per_second=60, minimum_frames_per_second=30)"
    },
    {
    "key": "board.DISPLAY.root_group",
    "topic": "Display - set active group",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Display.root_group",
    "code": "import board\nimport displayio\ndisp = board.DISPLAY\ng1 = displayio.Group()\ng2 = displayio.Group()\ndisp.root_group = g1\ndisp.root_group = g2"
    },
    {
    "key": "busio.I2C.scan",
    "topic": "I2C device scan for",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/busio/index.html",
    "code": "import board\nimport busio\ni2c = busio.I2C(board.SCL, board.SDA)\ni2c.try_lock()\ndevices = i2c.scan()\ni2c.unlock()\ndetected_devices = []\nfor device in devices:\n    detected_devices.append(hex(device))\nprint(detected_devices)"
    },
    {
    "key": "busio.I2C.writeto",
    "topic": "I2C device data write to",
    "link": "https://docs.circuitpython.org/en/latest/shared-bindings/busio/index.html#busio.I2C.writeto",
    "code": "import board\nimport busio\ni2c = busio.I2C(board.SCL, board.SDA)\ndevice_address = 0x1c\nif i2c.try_lock():\n    try:\n        i2c.writeto(device_address, bytes([0x01, 0x02, 0x03, 0x04, 0x05]))\n        i2c.writeto(device_address, bytes([0x02, 0x03, 0x04]), start=1, end=4)\n    finally:\n        i2c.unlock()"
    },
    {
      "key": "abbreviations",
      "topic": "Circuitpython abbreviations",
      "link": "https://wiki.python.org/moin/PythonGlossary",
      "code": "adc = adc analog-to-digital converter, arm = advanced risc machines, busio = bus input/output library, cp = circuitpython, dac = dac digital-to-analog converter, eeprom = eeprom electrically erasable programmable read-only memory, flash = flash non-volatile memory storage, float = floating point number, gnd = gnd ground pin, gpio = gpio general-purpose input/output, ic = ic integrated circuit pin, ide = ide integrated development environment, i2c = i2c inter-integrated circuit (protocol), int = integer, led = led light emitting diode pin, mcu = mcu microcontroller unit, miso = miso master in slave out pin (spi), mosi = mosi master out slave in pin (spi), np = numpy array library, pcb = pcb printed circuit board, pwm = pwm pulse-width modulation, qspi = qspi quad spi, ram = ram random access memory, repl = repl read-eval-print loop, rst = rst reset pin, rtc = rtc real-time clock, rx = rx receive pin (uart), scl = scl serial clock pin (i2c), sda = sda serial data pin (i2c), sck = sck serial clock pin (spi), smc = smc surface mount component, soc = soc system on chip, spi = spi serial peripheral interface (protocol), smt = smt surface mount technology, tht = tht through-hole technology, tx = tx transmit pin (uart), usb = usb universal serial bus, vcc = vcc voltage power supply pin"
    },
    {
      "key": "circuitpython_community",
      "topic": "Circuitpython library community",
      "link": "https://github.com/adafruit/CircuitPython_Community_Bundle/tree/main/libraries/helpers",
      "code": "absolute_mouse airqualitytools ansi_escape_code arrowline async_button async_buzzer asynccp AzureCustomVision_Prediction base64 candlesticks caveble circuitpython_display_frame color_picker colorfader csv discordbot display_ht16k33 displayio_listselect dotstar_featherwing dst_adjuster equalizer example functools gamblor21_ahrs gauge HMAC ifttt leapyear mag_cal mcp23017_scanner midi_tools morsecode multi_keypad noise nonblocking_serialinput nonblocking_timer nvm_helper ohmslaw palettefader palettefilter paletteslice parse PiperBlocklyLibrary punkconsole rangeslicer rgb_spectrumtools scales schedule shadowwatcher simple_dial slider styles temperaturetools touchcalibrator tzdb uboxplot udecimal uplot uuidv4"
    },
    {
      "key": "circuitpython_uplot.uscatter",
      "topic": "Visualize data plot scatter",
      "link": "https://circuitpython-uplot.readthedocs.io/en/latest/#scatter",
      "code": "import time import board from ulab import numpy as np from circuitpython_uplot.uplot import Uplot from circuitpython_uplot.uscatter import uscatter display = board.DISPLAY plot = Uplot(0, 0, display.width, display.height, padding=0) plot.axs_params(axstype=\"cartesian\") a = np.linspace(1, 100) b = a plot.x_range = (np.min(a), np.max(a)) plot.y_range = (np.min(b), np.max(b)) display.show(plot) while True: time.sleep(1)"
    },
    {
      "key": "circup",
      "topic": "circuitpython update library",
      "link": "https://docs.circuitpython.org/projects/circup/en/latest/index.html#",
      "code": "text=Circup%20requires%20Python%203.5%20or,pip3%20install%20%2D%2Duser%20circup%20. Install circup application on host computer terminal window: pip install circup Connect microcontroller to computer via usb data cable. At terminal prompt use: circup update."
    },
    {
      "key": "countio.Counter",
      "topic": "Count GPIO pin changes",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/countio/index.html",
      "code": "import time import board import countio pin_counter = countio.Counter(board.D1, edge=countio.Edge.RISE) while True: if pin_counter.count >= 100: pin_counter.reset() print(pin_counter.count) time.sleep(0.1)"
    },
    {
      "key": "data_visualization",
      "topic": "Data visualization options",
      "link": "https://datavizcatalogue.com/",
      "code": "Area Charts Bar Charts Box Plots Cellular Automata Clock Visualization Geographic Maps Heatmaps Histograms Line Graphs Lissajous Curves Mandelbrot Set Music Visualizer Network Graphs Parallel Coordinates Particle Systems Perlin Noise Pie Charts Radar Charts Reaction-Diffusion Systems Sankey Diagrams Scatter Plots Spirographs Tessellations Treemaps Word Clouds"
    },
    {
      "key": "digitalio.Direction",
      "topic": "GPIO - set input output mode",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/digitalio/index.html",
      "code": "import board import digitalio digital_pin = digitalio.DigitalInOut(board.D1) digital_pin.direction = digitalio.Direction.INPUT pin_value = digital_pin.value digital_pin.direction = digitalio.Direction.OUTPUT digital_pin.value = True"
    },
    {
      "key": "digital_pin.pull",
      "topic": "GPIO voltage default ",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/digitalio/index.html#digitalio.Pull",
      "code": "import board import digitalio digital_pin = digitalio.DigitalInOut(board.D1) digital_pin.direction = digitalio.Direction.INPUT digital_pin.pull = digitalio.Pull.UP pin_value = digital_pin.value digital_pin.pull = digitalio.Pull.DOWN pin_value = digital_pin.value"
    },
    {
      "key": "displayio",
      "topic": "Display - code library",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/",
      "code": "Module enables display control on Adafruit microcontrollers. It supports color conversion, palette management, pixel shaders, and grouping of display objects."
    },
    {
      "key": "displayio.Bitmap",
      "topic": "Bitmap - buffer size set",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Bitmap",
      "code": "import displayio bm = displayio.Bitmap(10, 10, 2) bm[0, 1] = 1 pixel_value = bm[0, 1] print(pixel_value)"
    },
    {
      "key": "displayio.Bitmap.blit",
      "topic": "Bitmap - pixels insert",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/bitmaptools/index.html#bitmaptools.arrayblit",
      "code": "import displayio t_bm = displayio.Bitmap(16, 16, 4) s_bm = displayio.Bitmap(8, 8, 4) t_bm.blit(4, 4, s_bm, x1=0, y1=0, x2=8, y2=8)"
    },
    {
      "key": "displayio.Bitmap.dirty",
      "topic": "Bitmap - update",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Bitmap.dirty",
      "code": "import displayio bm = displayio.Bitmap(16, 16, 2) bm.dirty(x1=2, y1=2, x2=6, y2=6)"
    },
    {
      "key": "displayio.Bitmap.fill",
      "topic": "Bitmap - color fill",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Bitmap.fill",
      "code": "import displayio pl = displayio.Palette(2) pl[0], pl[1] = 0xff0000, 0x00ff00\nbm = displayio.Bitmap(10, 10, len(pl)) bm.fill(1)"
    },
    {
      "key": "displayio.Bitmap.fill",
      "topic": "Bitmap - color fill",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Bitmap.fill",
      "code": "import board import displayio rect_width, rect_height = 64, 64 rect_x = (board.DISPLAY.width - rect_width) // 2 rect_y = (board.DISPLAY.height - rect_height) // 2 bitmap = displayio.Bitmap(rect_width, rect_height, 1) bitmap.fill(1) palette = displayio.Palette(2) palette[0] = 0x000000 palette[1] = 0xFF0000 tile_grid = displayio.TileGrid(bitmap, pixel_shader=palette, x=rect_x, y=rect_y) my_group = displayio.Group() my_group.append(tile_grid) board.DISPLAY.show(my_group) while True: pass"
    },
    {
      "key": "displayio.ColorConverter",
      "topic": "Color - convert colorspace",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.ColorConverter",
      "code": "import displayio cc = displayio.ColorConverter(input_colorspace=displayio.Colorspace.RGB888, dither=False) conv_color = cc.convert(0xFF0000) # RGB565 RGB565_SWAPPED RGB555 RGB555_SWAPPED"
    }
    ,
    {
      "key": "displayio.ColorConverter.make_opaque",
      "topic": "Color - convert to opaque",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.ColorConverter.make_opaque",
      "code": "import displayio cc = displayio.ColorConverter() cc.make_opaque(0)"
    },
    {
      "key": "displayio.ColorConverter.make_transparent",
      "topic": "Color - convert to transparent",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Palette.make_transparent",
      "code": "import displayio cc = displayio.ColorConverter(input_colorspace=displayio.Colorspace.RGB888) cc.make_transparent(0xFF0000)"
    },
    {
      "key": "displayio.Colorspace",
      "topic": "Color - colorspace convert",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Colorspace",
      "code": "import displayio color_space = displayio.Colorspace.RGB888 # RGB565 RGB565_SWAPPED RGB555 RGB555_SWAPPED"
    },
    {
      "key": "displayio.Display.auto_refresh",
      "topic": "Display - automatic refresh",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Display.auto_refresh",
      "code": "import board import displayio disp = board.DISPLAY disp.auto_refresh = True"
    },
    {
      "key": "displayio.Display.fill_row",
      "topic": "Display - get pixel values",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Display.fill_row",
      "code": "import board disp = board.DISPLAY buffer = bytearray(disp.width * 2) buffer = disp.fill_row(0, buffer)"
    },
    {
      "key": "displayio.Display.root_group",
      "topic": "Display - group make master",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.EPaperDisplay.root_group",
      "code": "import board import displayio disp = board.DISPLAY root = displayio.Group() emp = displayio.Group() root.append(emp) disp.root_group = root"
    },
    {
      "key": "displayio.Group",
      "topic": "Display - group make",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Group",
      "code": "import displayio g = displayio.Group(scale=2, x=100, y=80) bm = displayio.Bitmap(32, 32, 2) tg = displayio.TileGrid(bm, pixel_shader=displayio.ColorConverter()) g.append(tg)"
    },
    {
      "key": "displayio.Group.insert",
      "topic": "Display - group add object",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Group.insert",
      "code": "import board import displayio disp = board.DISPLAY root = displayio.Group() s1 = displayio.Bitmap(60, 60, 3) s1.fill(1) s2 = displayio.Bitmap(60, 60, 3) s2.fill(2) s3 = displayio.Bitmap(60, 60, 3) s3.fill(3) palette = displayio.Palette(4) palette[1] = 0xFF0000 palette[2] = 0x00FF00 palette[3] = 0x0000FF # red green blue tg1 = displayio.TileGrid(s1, pixel_shader=palette, x=80, y=80) tg2 = displayio.TileGrid(s2, pixel_shader=palette, x=100, y=100) tg3 = displayio.TileGrid(s3, pixel_shader=palette, x=120, y=120) root.append(tg1) root.append(tg2) root.insert(1, tg3) disp.show(root) while True: pass"
    },
    {
      "key": "displayio.Group.pop",
      "topic": "Display - group remove object",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Group.pop",
      "code": "import board import displayio disp = board.DISPLAY group = displayio.Group() rect_bitmap = displayio.Bitmap(30, 30, 1) rect_palette = displayio.Palette(1) rect_palette[0] = 0x00FF00 rect = displayio.TileGrid(rect_bitmap, pixel_shader=rect_palette, x=0, y=0) group.append(rect) removed_item = group.pop(0) disp.show(group) while True: pass"
    },
    {
      "key": "displayio.Group.remove",
      "topic": "Display - group remove layer",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Group.remove",
      "code": "import displayio group = displayio.Group() rect = displayio.Group() group.append(rect) group.remove(rect)"
    },
    {
      "key": "displayio.OnDiskBitmap",
      "topic": "Bitmap - display bitmap file",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.OnDiskBitmap",
      "code": "import displayio group = displayio.Group() with open(\"images/image.bmp\", \"rb\") as file: odb = displayio.OnDiskBitmap(file) sprite = displayio.TileGrid(odb, pixel_shader=displayio.ColorConverter()) group.append(sprite)"
    },
    {
      "key": "displayio.Palette",
      "topic": "Palette - define custom colors",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Palette",
      "code": "import displayio palette = displayio.Palette(1) palette[0] = 0xFF0000 bm = displayio.Bitmap(10, 10, len(palette)) bm[0, 1] = 0"
    },
    {
      "key": "displayio.Palette",
      "topic": "Palette - define custom colors",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Palette",
      "code": "import displayio pal = displayio.Palette(16, dither=True) pal[0] = 0xFF0000 bm = displayio.Bitmap(10, 10, len(pal)) bm[5, 5] = 0 tg = displayio.TileGrid(bm, pixel_shader=pal)"
    },
    {
      "key": "displayio.Palette.is_transparent",
      "topic": "Palette - find transparent pixels",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.Palette.is_transparent",
      "code": "import displayio pal = displayio.Palette(16) pal.make_transparent(0)"
    },
    {
      "key": "displayio.release_displays",
      "topic": "Display - release after use",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/index.html#displayio.release_displays",
      "code": "import displayio displayio.release_displays()"
    },
    {
      "key": "displayio.TileGrid",
      "topic": "Display - bitmap tile transpose",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.TileGrid",
      "code": "import displayio bm = displayio.Bitmap(32, 32, 2) tg = displayio.TileGrid(bm, pixel_shader=displayio.ColorConverter()) tg.transpose_xy = True"
    },
    {
      "key": "displayio.TileGrid.contains",
      "topic": "Display - touch screen point",
      "link": "https://docs.circuitpython.org/en/latest/shared-bindings/displayio/#displayio.TileGrid.contains",
      "code": "import displayio bm = displayio.Bitmap(32, 32, 2) tg = displayio.TileGrid(bm, pixel_shader=displayio.ColorConverter()) inside = tg.contains((5, 5, 0))"
    }
    
]
};
