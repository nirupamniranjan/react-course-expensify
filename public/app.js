'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*let visibility = false;


const toggleVisibilitly =() =>
{
      visibility=!visibility;

      render();
};

const render =() =>
{
    const output =(<div>
        <h1>
        visiblity Toggle
        </h1>

        <button onClick={toggleVisibilitly}>{visibility?'Hide Details':'Show Details'}</button>
        {visibility && (<p>Content to display</p>)}
        </div>);


ReactDOM.render(output,document.getElementById('app'));

};

render();*/

var VisibilityToggle = function (_React$Components) {
    _inherits(VisibilityToggle, _React$Components);

    function VisibilityToggle() {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this));

        _this.VisibilityToggle = _this.VisibilityToggle.bind(_this);
        _this.state = {
            visiblityFlag: false
        };

        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: 'handleToggleVisiblity',
        value: function handleToggleVisiblity() {

            this.setState(function (prevState) {
                return visiblityFlag = !prevState.visiblityFlag;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'visiblity Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: handleToggleVisiblity },
                    visiblityFlag ? 'Hide Details' : 'Show Details'
                ),
                visiblityFlag && React.createElement(
                    'p',
                    null,
                    'Content to display'
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Components);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));
