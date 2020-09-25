import { connect } from 'react-redux';
import FeaturedAlbums from './featured_albums';

const mapStateToProps = ({ session }) => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeaturedAlbums);
