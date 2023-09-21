/**
 * Create a Bootsterap butoonn component
 *
 */
interface props {
  classname: string;
  content: string;
}

const Exercise1 = ({ classname, content }: props) => {
  return (
    <div>
      <button type="button" className={classname}>
        {content}
      </button>
    </div>
  );
};

export default Exercise1;
