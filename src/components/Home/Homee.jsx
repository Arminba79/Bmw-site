
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.css";

const App = () => {
  
  
  return (
    <div className="App w-full">
      <div id="header">Header</div>
			<div id="footer">Footer</div>
      <ReactFullpage
        debug
        
        licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx" 
        anchors={["firstPage","secondPage","3rdPage"]} 
        render={() => (
          <ReactFullpage.Wrapper>
            
    <div className="section"><h1>Fixed Elements</h1></div>
    <div className="section ">
        <div className="slide"><h1>Section 2</h1></div>
        <div className="slide"><h1>Slide 2.1</h1></div>
        <div className="slide"><h1>Slide 2.2</h1></div>
    </div>
    <div className="section"><h1>Section 3</h1></div>

          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default App;