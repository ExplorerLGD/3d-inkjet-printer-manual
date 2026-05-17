---
hide:
  - navigation
---

# SD Card

The SD card stores the system image and boot configuration. To ensure stable startup and reliable file access, use a fast and reliable SD card.

## Flash the System Image

Use DiskImager to flash the system image to the SD card.

## Modify the Wi-Fi Configuration

After the image has been flashed, remove and insert the SD card again. The computer should detect a partition named `boot`.

1. Open the `boot` partition.
2. Find and open the `bootpy.py` file.
3. Locate the following configuration:

```python
SSID = "your ssid"
PASSWORD = "your password"
```

4. Replace `your ssid` with the actual Wi-Fi name.
5. Replace `your password` with the actual Wi-Fi password.
6. Save `bootpy.py`.
7. Safely eject the SD card.
8. Insert the SD card into the device and power it on.

## Example

If the Wi-Fi name is `MyWifi` and the password is `12345678`, change the configuration to:

```python
SSID = "MyWifi"
PASSWORD = "12345678"
```

!!! note "Note"
    Keep the English double quotation marks. The Wi-Fi name and password must be written inside the quotation marks.
