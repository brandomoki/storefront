import { connect } from "react-redux";
import { selectCategory } from "../../store/actions";


const Catagories = () => {
  return (
    <>
      <h1>
        <span>Categories</span>
      </h1>
    </>
  );
};

const mapStateToProps = (store) => ({ 
  categories: store.categories,
});

const mapDispatchToProps = { selectCategory };

export default connect( mapStateToProps, mapDispatchToProps )(Catagories);