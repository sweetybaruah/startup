from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        # Get the absolute path to the index.html file
        html_file = os.path.abspath('dist/index.html')
        page.goto(f"file://{html_file}")
        page.screenshot(path="jules-scratch/verification/verification.png", full_page=True)
        browser.close()

run()
