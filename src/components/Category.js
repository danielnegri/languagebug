/**
 * Created by daniel on 5/8/16.
 */
import React from 'react';
import CoreIcon from './CoreIcon';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.title = props.title;
    this.theme = props.theme;
    this.icon = props.icon;
  }



  render() {
    const playArrow = (
      <svg viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" className="fit"><g><path d="M8 5v14l11-7z"></path></g></svg>
    );

    const styles = {
      tile: {
        position: 'absolute'
      },
      img: {
        pointerEvents: 'none',
        display: 'block',
        height: 'auto',
        maxWidth: '65%',
        maxHeight: '100%',
        border: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    };

    return (
      <div className={'category-item '+this.theme+' layout vertical'}>
        <div className="tile theme-bg-a dummy fit hero-id" style={styles.tile}></div>
        <div className="tile flex auto layout vertical">
          <div className="flex auto relative">
            <div className="fit layout vertical center center-justified">
              <img src={this.icon} name={this.name} className="core-icon" style={styles.img}/>
            </div>
          </div>
          <div className="cat-name theme-bg horizontal center layout hero-id">
            <div className="flex">
              <span>{ this.title }</span>
            </div>
            <CoreIcon name="arrow-forward" className="category-icon theme-bg" icon={playArrow} />
          </div>
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  name: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  theme: React.PropTypes.string,
  icon: React.PropTypes.string
};

Category.defaultProps = {
  name: 'Undefined',
  title: 'Undefined',
  theme: 'green-theme'
};

export default Category;

