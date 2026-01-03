export default function Footer() {
  return (
    <footer className="py-8 border-t border-border/30 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
        <p>© 2024 Yesar Rahman. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
