import  "../../../shared/components/styling/styles.css"
import top from "../../../assets/imgs/top.png"
import logo from "../../../assets/imgs/logo.png"
import bottom from "../../../assets/imgs/bottom.png"

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
