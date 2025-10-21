import Logo from "../assets/icons/Logo.svg";

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#171717] backdrop-blur-sm z-50 border-b border-gray-700 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[82px]">
          {/* Logo */}
          <div className="flex items-center xl:ml-[104px]">
            <img
              src={Logo}
              alt="LexAar Bucătării"
              className="w-[120px] h-[40px] sm:w-[140px] sm:h-[45px] xl:w-[152.5px] xl:h-[50px]"
            />
          </div>

          {/* Navigation - скрыта пока */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* <a href="#servicii" className="text-white hover:text-primary transition-colors font-medium">
              Servicii
            </a>
            <a href="#despre" className="text-white hover:text-primary transition-colors font-medium">
              Despre noi
            </a>
            <a href="#blog" className="text-white hover:text-primary transition-colors font-medium">
              Blog
            </a> */}
          </nav>

          {/* Right side - Phone and CTA */}
          <div className="flex items-center gap-2 sm:gap-4 xl:gap-5 xl:mr-[104px]">
            {/* Phone number - hidden on small screens, visible on xl+ */}
            <a
              href="tel:+37378907007"
              className="hidden xl:block text-white hover:text-primary transition-colors font-medium text-base"
            >
              +373 78 90 70 07
            </a>

            {/* Phone icon - visible on small screens */}
            <a
              href="tel:+37378907007"
              className="xl:hidden text-white hover:text-primary transition-colors"
              style={{ padding: "8px" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* CTA Button - hidden on small screens, visible on sm+ */}
            <button
              className="hidden sm:flex bg-[#BF1A1A] text-white hover:bg-red-700 transition-colors font-medium items-center justify-center"
              style={{
                borderRadius: "8px",
                height: "48px",
                padding: "12px 16px",
                fontSize: "16px",
                lineHeight: "20px",
                fontFamily: "Inter",
                fontWeight: "500",
              }}
              onClick={onOpenModal}
            >
              <span>Solicită oferta</span>
            </button>

            {/* Language switcher - always visible */}
            <div className="flex items-center">
              <button
                className="text-white hover:text-primary transition-colors"
                style={{
                  width: "29px",
                  height: "24px",
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontFamily: "Inter",
                  fontWeight: "400",
                }}
              >
                RO
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
