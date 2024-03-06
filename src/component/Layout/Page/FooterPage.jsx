
'use client';

import { Footer } from 'flowbite-react';
function FooterPage() {
  return (
    <>  
    <Footer container >
      <div className="w-full h-full">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
           src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202110180743"
            alt="EmoMac"
            name="EmoMac"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">Home</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Product</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="EmoMac™" year={2024} />
      </div>
    </Footer>
    </>
  );
}

export default FooterPage;
