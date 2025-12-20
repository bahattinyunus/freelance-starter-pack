import os
import sys

def print_header():
    header = """
    ███╗   ██╗███████╗██╗  ██╗██╗   ██╗███████╗
    ████╗  ██║██╔════╝╚██╗██╔╝██║   ██║██╔════╝
    ██╔██╗ ██║█████╗   ╚███╔╝ ██║   ██║███████╗
    ██║╚██╗██║██╔══╝   ██╔██╗ ██║   ██║╚════██║
    ██║ ╚████║███████╗██╔╝ ██╗╚██████╔╝███████║
    ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
    <<< FREELANCE KOMUTA MERKEZİ - AKTİF >>>
    """
    print(header)

def list_dominions():
    print("[*] Galaktik Dominion'lara Erişiliyor...")
    dominions = [d for d in os.listdir('.') if d.startswith('DOMINION_')]
    for d in dominions:
        print(f"  > {d}")

def main():
    print_header()
    if len(sys.argv) < 2:
        print("Kullanım: python nexus_tool.py [durum|liste]")
        return

    cmd = sys.argv[1].lower()
    if cmd == "durum":
        print("[+] Sistem Kontrolü: TÜM MODÜLLER ÇEVRİMİÇİ")
        list_dominions()
    elif cmd == "liste":
        list_dominions()
    else:
        print(f"[!] Bilinmeyen Komut: {cmd}")

if __name__ == "__main__":
    main()
