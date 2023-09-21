interface Props {
  color: string;
  strongContent: string;
  content: string;
  onClose: () => void;
}

const Exercise2 = ({ color, strongContent, content, onClose }: Props) => {
  return (
    <div>
      <div
        className={"alert alert-" + color + " alert-dismissible"}
        role="alert"
      >
        <strong>{strongContent}</strong> {content}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default Exercise2;
