type TitleProps = {
  mode: "list" | "add"
}

/**
 * Render title header for windows.
 * Different class depending on mode.
 */
export const Title =  ({ mode }: TitleProps) => {
  return (
  <>
  <div className={mode === "list" ? "window-header" : "notepad-header"}>
      {mode === "list" ? (<h1>Shopping List</h1>) : (<h2><img className="notepad-icon" src="src/assets/notepad.png"></img>Untitled - Notepad</h2>)}
      <div className="window-buttons">
        <button className="material-symbols-outlined minimize-btn">minimize</button>
        <button className="material-symbols-outlined full-window-btn">web_asset</button>
        <button className="material-symbols-outlined close-btn">close</button>
      </div>
    </div>
  </>
)}