import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12 mt-auto border-t-4 border-accent">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-bold font-mono text-accent mb-2">Vier.</h3>
          <p className="text-gray-400">Data Science & Web Developer</p>
        </div>
        
        <div className="flex gap-6 font-mono text-sm">
          <a href="https://github.com/vier030606" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/javier-hidayat-9783b6386/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/jvyerr_36" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            Instagram
          </a>
        </div>
        
        <div className="text-gray-500 text-sm font-mono">
          &copy; {currentYear} Javier Nur Hidayat.<br className="md:hidden" /> All rights reserved.
        </div>
      </div>
    </footer>
  );
}
