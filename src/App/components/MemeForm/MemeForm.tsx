import React, { useEffect, useState } from "react";
import styles from "./MemeForm.module.css";
import type { MemeInterface } from "orsys-tjs-meme";
interface IMemeFormProps {
  meme:MemeInterface
}
interface IMemeFormState {}
const MemeForm: React.FC<IMemeFormProps> = ({meme}) => {
  const [state, setState] = useState<MemeInterface>(meme);
  useEffect(() => {
    //montage // update
    console.log(state);

    return () => {
      //demontage
    };
  }, [state]);
  const onNumberChange=(evt:React.ChangeEvent<HTMLInputElement>)=>{
    const s={...state};
    s[evt.target.name]=parseInt(evt.target.value);
    setState(s);
  }
  const onCheckChange=(evt:React.ChangeEvent<HTMLInputElement>)=>{
    setState({...state,[evt.target.name]:evt.target.checked});

  }

  const onStringChange=(evt:React.ChangeEvent<HTMLInputElement>)=>{
    setState({...state,[evt.target.name]:evt.target.value});
  }

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input name="titre" id="titre" value={state.titre} onChange={onStringChange} />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image">
          <option>futurama1.jpg</option>
          <option>futurama2.png</option>
          <option>futurama3.png</option>
          <option>gwenadu.jpg</option>
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input name="text" id="text" type="text"  value={state.text} onChange={onStringChange} />
        <br />
        <label htmlFor="x">
          <h2 style={{ display: "inline" }}>x :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="x"
          id="x"
          type="number"
          value={state.x}
          onChange={onNumberChange}
        />
        <label htmlFor="y">
          <h2 style={{ display: "inline" }}>y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="y"
          id="y"
          type="number"
          value={state.y}
          onChange={onNumberChange}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input name="color" id="color" type="color" value={state.color} onChange={onStringChange} />
        <br />
        <label htmlFor="fontSize">
          <h2 style={{ display: "inline" }}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={state.fontSize} onChange={onNumberChange}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 style={{ display: "inline" }}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={state.fontWeight} onChange={onStringChange}
          
        />
        <br />
        <input name="underine" id="underline" type="checkbox" checked={state.underline} onChange={onCheckChange}/>
        &nbsp;
        <label htmlFor="underline">
          <h2 style={{ display: "inline" }}>underline</h2>
        </label>
        &nbsp;<h2 style={{ display: "inline" }}>/</h2>
        &nbsp;
        <label htmlFor="italic">
          <h2 style={{ display: "inline" }}>italic</h2>
        </label>
        &nbsp;
        <input name="italic" id="italic" type="checkbox" checked={state.italic} onChange={onCheckChange} />
        <hr />
        <br />
        <label htmlFor="frameSizeX">
          <h2 style={{ display: "inline" }}>frame size X :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeX"
          id="frameSizeX"
          type="number"
          min="0"
          value={MemeForm.x}
        />
        px{" "}
        <label htmlFor="frameSizeY">
          <h2 style={{ display: "inline" }}>frame size y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeY"
          id="frameSizeY"
          type="number"
          min="0"
        />
        px
        <br />
      </form>
    </div>
  );
};

export default MemeForm;
