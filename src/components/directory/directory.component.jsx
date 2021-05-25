import React from "react";

import { createStructuredSelector} from 'reselect'
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import "./directory.styles.scss";
import { selectDirectorySelector } from "../../redux/directory/directory.selectors";

const Directory=({sections})=>  (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );


const mapStateToProps=createStructuredSelector({
sections: selectDirectorySelector
})

export default connect(mapStateToProps)(Directory);
