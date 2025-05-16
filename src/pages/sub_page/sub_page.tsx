import NavBar from "../../components/subpage/navbar/navbar";
import TextLeft from "../../components/subpage/text-left/text-left";
import "./sub_page.css";

function SubPage() {
  return (
    <div id="body-sub-page">
      <div id="left-side">
        <h1 id="title">SubPage</h1>
        <div id="text-box" />
        <TextLeft />
      </div>
      <div id="right-side">
        <div id="right-side-top">
          <div id="image-box-top">
            <p id="p-image">Oloco</p>
          </div>
          <div style={{ marginLeft: "5%" }}>
            <NavBar />
          </div>
        </div>
        <div id="image-box-bottom">
          <p id="p-image">Oloco</p>
        </div>
      </div>
    </div>
  );
}

export default SubPage;
