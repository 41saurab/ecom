import PropTypes from "prop-types";

function SelectedCategory({ title }) {
  return (
    <div className="flex gap-10 items-center py-10">
      <h1 className="text-2xl text-white font-semibold">{title}</h1>
      <div className="w-60 h-[1px] bg-silver"></div>
    </div>
  );
}

SelectedCategory.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SelectedCategory;
