export const Button = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  );
};
