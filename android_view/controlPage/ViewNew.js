module.exports = (React, ReactNative, { styles }) => {
  const { TouchableWithoutFeedback, View, TouchableOpacity } = ReactNative;

  const ViewNew = React.createClass({
    displayName: 'ViewNew',
    onSelect(value) {
      this.props.onSelect(value);
    },
    render() {
      return (
        <TouchableOpacity>
          <View>
            { React.Children.map(this.props.children, (x) => (
              React.cloneElement(x, {onPress: this.onSelect})
            )) }
          </View>
        </TouchableOpacity>
      );
    }
  });

  return ViewNew;
};
