const WEIBO_OAUTH = {
    APPKEY: '3828459437',
    SECRET: '68a7750caa2ffebec625ea55b4c768ca',
    OAUTH_CALLBACK_URL: 'http://www.test.com:8080'
}

const WEIBO_API = {
    HOST: 'api.weibo.com',
    ACCESS_TOKEN: '/oauth2/access_token',
    HOME_TIMELINE: '/2/statuses/home_timeline.json',
    PUBLIC_TIMELINE: '/2/statuses/public_timeline.json',
    USERS_SHOW: '/2/users/show.json',
    STATUSES_SHOW: '/2/statuses/show.json',
    USER_TIMELINE: '/2/statuses/user_timeline.json',
    comments_show: '/2/comments/show.json',
    update: '/2/statuses/update.json',
    upload: '/2/statuses/upload.json',
    statuses_mentions: '/2/statuses/mentions.json',
    comments_comments: '/2/comments/mentions.json',
    receive_comment: '/2/comments/to_me.json',
    send_comment: '/2/comments/by_me.json',
    my_follower: '/2/friendships/followers.json',
    my_friend: '/2/friendships/friends.json'
}

module.exports = {
    WEIBO_OAUTH: WEIBO_OAUTH,
    WEIBO_API: WEIBO_API
}