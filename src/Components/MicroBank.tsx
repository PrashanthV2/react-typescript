import  "../CSS/styles.css"
import top from "./imgs/top.png"
import logo from "./imgs/logo.png"
import bottom from "./imgs/bottom.png"

export const MicroBank = () => {
    return (
      <div className="logo-container">
        <img src={top} alt="top" className="top-img" />
        <img src={logo} alt="logo" className="spirit-logo" />
        <img src={bottom} alt="bottom" className="bottom-img" />
        <p className="heading"><a href="dashboard.html">Micro Bank</a></p>
      </div>
    )
}
