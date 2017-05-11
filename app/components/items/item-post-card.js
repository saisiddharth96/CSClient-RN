/**
 * @flow
 */
'use strict';
import React, { PropTypes } from 'react';
import { Image, TouchableOpacity, Platform, Share } from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Icon,
  Left,
  Text,
  Thumbnail,
  View,
} from 'native-base';
import HTMLView from 'react-native-htmlview';
import HTMLParser from 'fast-html-parser';
import he from 'he';
import I18n from '../../localizations/I18n';
import { navigate } from '../../actions/actions-navigation';

/**
 * Basic needs for item:
 * title
 * title_plain
 * type: post
 * url
 * excerpt
 * id
 * categories: description / id / parent / post_count / slug / title
 * author: description / name / nickname / slug / id
 * comment_count
 * comment_status
 * comments
 * custom_fields: onesignal_meta_box_present / onesignal_send_notification
 * date: like 2017-02-22 00:11:14
 * modified
 * slug
 * status: publish
 * tags: description / id / post_count / slug / title
 */

const ItemPostCard = props => {
  const { title, author, content, excerpt, comment_count, url } = props.post;
  const { dispatch } = props;
  const sharePost = () => {
    const content = {
      message: url,
      title: 'Clip-sub share',
      url: url,
    };

    const options = {
      tintColor: '#fff',
      dialogTitle: 'Doko;',
    };

    Share.share(content, options);
  };

  const itemNode = HTMLParser.parse(he.unescape(content));
  const imageLink = 'https://puu.sh/pXSnj/ce88df7ec0.png';
  // const imageLink = itemNode.querySelector('img').attributes['data-lazy-src'];
  // By default, it parses the first image in the post.

  return (
    <Card>
      <CardItem header>
        <Left>
          <Text style={styles.title}>{he.unescape(title)}</Text>
        </Left>
      </CardItem>
      <TouchableOpacity>
        <View style={styles.author}>
          <Thumbnail
            small
            source={{ uri: 'https://unsplash.it/80/80?random' }}
          />
          <Text style={styles.authorName}>
            {author.name}
          </Text>
        </View>
      </TouchableOpacity>
      <CardItem cardBody>
        <Body>
          <Image source={{ uri: imageLink }} style={styles.thumbnailImage} />
        </Body>
      </CardItem>
      <CardItem>
        <HTMLView value={excerpt.trim()} />
      </CardItem>
      <CardItem style={styles.cardBottom}>
        <Button
          transparent
          onPress={() => dispatch(navigate('Content', props.post))}
        >
          <Icon name="chatbubbles" />
          <Text>{I18n.t('comment', { count: comment_count })}</Text>
        </Button>
        <Button transparent onPress={() => sharePost()}>
          <Icon name="md-share" />
          <Text>{I18n.t('share')}</Text>
        </Button>
      </CardItem>
    </Card>
  );
};

ItemPostCard.defaultProps = {
  title: '',
  excerpt: '',
  commentCount: 0,
  slug: '',
  id: 0,
  thumbnailImage: {},
};

ItemPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  slug: PropTypes.string,
  id: PropTypes.number.isRequired,
  thumbnailImage: PropTypes.object.isRequired,
};

export { ItemPostCard };

const styles = {
  thumbnailImage: {
    flex: 1,
    alignSelf: 'stretch',
    height: 160,
  },
  title: {
    fontSize: 19,
    //Iowan Old Style // Didot //Baskerville //AvenirNext-Medium
    fontFamily: Platform.select({
      android: 'Roboto',
      ios: 'Baskerville',
    }),
    color: '#676767',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 16,
  },
  authorName: {
    marginLeft: 12,
  },
  cardBottom: {
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderTopColor: '#eee',
  },
};
