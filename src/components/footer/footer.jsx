export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}