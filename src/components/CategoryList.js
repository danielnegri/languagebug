/**
 * Created by daniel on 5/8/16.
 */
import React from 'react';
import Category from './Category';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let bug01 = require('../images/icons/bug-01.png');
    let bug02 = require('../images/icons/bug-02.png');
    let bug03 = require('../images/icons/bug-03.png');
    let bug04 = require('../images/icons/bug-04.png');
    let bug05 = require('../images/icons/bug-05.png');
    let bug06 = require('../images/icons/bug-06.png');
    let bug07 = require('../images/icons/bug-07.png');
    let bug08 = require('../images/icons/bug-08.png');
    let bug09 = require('../images/icons/bug-09.png');

    return (
      <div id="categories" name="categories" className="vertical layout">
        <div name="categories-panel" className="categories-panel flex auto">
          <div name="category-list" className="category-list content wide tile-cascade fade" data-selected="0">
            <Category name="adjectives" title="Adjectives" theme="leaderboard" icon={bug01} />
            <Category name="food" title="Food & Drink" theme="green-theme" icon={bug02} />
            <Category name="knowledge" title="General Knowledge" theme="yellow-theme" icon={bug03} />
            <Category name="history" title="History" theme="blue-theme" icon={bug04} />
            <Category name="geography" title="Geography" theme="red-theme" icon={bug05} />
            <Category name="science" title="Science" theme="green-theme" icon={bug06} />
            <Category name="tvmovies" title="TV & Movies" theme="purple-theme" icon={bug07} />
            <Category name="music" title="Music" theme="blue-theme" icon={bug08} />
            <Category name="entertainment" title="Entertainment" icon={bug09} />
            <Category name="sports" title="Sports" theme="purple-theme" icon={bug03} />
            <Category name="profile" title="Profile" theme="profile" icon={bug07} />
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryList;
