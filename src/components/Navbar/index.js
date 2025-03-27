import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

class Navbar extends Component {
  state = { onMobile: false };

  onClickMobileMenu = () => {
    this.setState(prevState => ({ onMobile: !prevState.onMobile }));
  };

  onHideNav = () => {
    this.setState({ onMobile: false });
  };

  render() {
    const { onMobile } = this.state;
    return (
      <div>
        <div className="bg-white lg:flex justify-between items-center px-4 md:px-8 py-2">
          {/* Logo Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-1 md:gap-x-2">
              <img className="h-7 md:h-8 w-auto" src={logo} alt="CashEX Logo" />
              <Link to="/" className="text-lg md:text-xl font-bold">
                CashEX-Bite Box
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-3xl text-black" onClick={this.onClickMobileMenu}>
              <i className="bi bi-list font-bold"></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-8">
            <Link to="/aboutus" className="text-sm font-medium">ABOUT US</Link>
            <a href="https://admin.biteboxes.in/terms/condition/user" className="text-sm font-medium">T&C</a>
            <a href="https://admin.biteboxes.in/privacy/policy/user" className="text-sm font-medium">PRIVACY POLICIES</a>
            <a href="https://admin.biteboxes.in/return/policy" className="text-sm font-medium">CANCELLATION & REFUND</a>
            <a href="https://admin.biteboxes.in/contact" className="text-sm font-medium">CONTACT US</a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${onMobile ? "block" : "hidden"}`}>
          <div className="flex flex-col justify-center items-center gap-y-2 py-4">
            <Link to="/aboutus" className="text-sm font-medium" onClick={this.onHideNav}>ABOUT US</Link>
            <a href="https://admin.biteboxes.in/terms/condition/user" className="text-sm font-medium" onClick={this.onHideNav}>T&C</a>
            <a href="https://admin.biteboxes.in/privacy/policy/user" className="text-sm font-medium" onClick={this.onHideNav}>PRIVACY POLICIES</a>
            <a href="https://admin.biteboxes.in/return/policy" className="text-sm font-medium" onClick={this.onHideNav}>CANCELLATION & REFUND</a>
            <a href="https://admin.biteboxes.in/contact" className="text-sm font-medium" onClick={this.onHideNav}>CONTACT US</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
