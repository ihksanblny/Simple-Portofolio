export default function Footer() {
  return (
    <footer className="bg-dark-surface py-6">
      <div className="container mx-auto text-center text-text-muted">
        <p>&copy; {new Date().getFullYear()} Ihksan. All Rights Reserved.</p>
        <p>Built with ❤️ using React & Tailwind CSS</p>
      </div>
    </footer>
  );
}