import CustomButton from "./CustomButton";
import PropTypes from "prop-types"

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        name="aiPicker"
        id="aipicker"
        rows={5}
        className="aipicker-textarea"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outlined"
            title="Asking AI...."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton type="outlined" title="AI Logo" handleClick={() => handleSubmit("logo")} />
            <CustomButton type="filled" title="AI Full" handleClick={() => handleSubmit("full")} />
          </>
        )}
      </div>
    </div>
  );
};

AIPicker.propTypes = {
  prompt: PropTypes.string,
  setPrompt: PropTypes.func,
  generatingImg: PropTypes.bool,
  handleSubmit: PropTypes.func,
}
export default AIPicker;
