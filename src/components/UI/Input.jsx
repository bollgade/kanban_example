export const Input = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <input type="text" className={className} {...otherProps}>
      {children}
    </input>
  );
};
