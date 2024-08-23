import { Link } from "react-router-dom";

import "./MyPage.css";

export const MyPage = () => {
  const handleSubmit = () => {};

  return (
    <>
      <div className="UserContaier">
        <div className="Usericon">写真</div>
        <div className="ContentList">
          <div className="top">ここに自分の名前が入る</div>
          <div className="bottom">
            <div className="social-media">
              <Link to="/MovieLists">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEX////+AAD//v/8AAD8///oAAD9+/fwAADtAAD+AAP5AAD+//31AAD9//3//f7rAADjAAD8x8nvsLH4//ztJijwPT/+/vn0r7D4vrz88/P57ev44uL42dn90NH0ubftqazwn6DvmJftj43rgIDodnjibG/iZV/gW1blUVHpSk7qRkLyNjfyJCHwCw/oOzjnTE3klJLvYGDzMDDtgIXwV1ryi4/mLCj0xb3qg33opZzw1tXps6rwcHX20MrqjpDqZmj71+DtNj7mFivsYmk7CXl0AAAJZ0lEQVR4nO2diVbbuhZANTm2JUsJCTVkYkpoKSVAewuU3tLevvf///SO5LiFBHpX7BPst9bZdBXIYLSt0bJ0whhBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEASxTQz8M8V3QMCX/yb8o8Y8eaHxjxsDzwngyfP217vahLWM5bkQ/jskVRUOxjKxdAbUEv/z8jHhf7EGXscKJ+ffa0zOzPN/pzmc8FZF6h9TGq09sf7i8lfvBjlrLXYaN+f3aYbEuuFoPJnu7B/0D4+OT05ms/np23dn788vP+xeXCwWcdxNHpEli8XF7u6Hy/dXZ+9+vJ1/md2cHB8d9g/2d6aT8WjolrrLb69ZYG0OBc/YcP7FaDLtH13PP77/tIgh2d0kzjItJa+M1lmcdLtJN44XH87/O78+6j9MRiKcw5wNHPy3/fopBNgNp4d/fd7tRZnm4OOddEihXP5eEB6RLxv751Lg8etk+Qz8pP1hdRb1dj/PDqdDBU3QgL1Ghk5ubpOscOE+IZBK+B9SKtPCtqqhhlf6wxS/h2eKB4vMvT2Z/Gqet4i6u4yLcx1SHuzSkKKlcXimmqHky6/iPbLwlPxXuYjPd6B2bKkFMr7bytX4KuZ1Klot4O/GV2NQVNvoSgwc17F+BGe1MUMO+Sm7BypX28hGZaxhJ5CB+g/FbsvoUI7jG2bW+93aGOEcm2lfQtPGFP0fTnWafWHWoRtCHrJ73VjxfEp2v4U8ZCL/Gsuyu2qaeJLjG1qxy9OWGKb6Aj0PoZe9ljptWm0JjHaOkf3MQLmoHfkX0DyBth2xtXHQURxqqZsWK0lhtHoIqUITFEYZdemP2xagulwyg9jtO2XGSXODtXWg20pGAzxBASX+7z+NoJtA9jGHbs6qWdNGa8wYZkvj2GXTQmtcKkRDpYa91oxnSnqIbSm0WpOsaaFVZPYVcVzj2EF7eooSeYAnyCy7btpnjVRfIxoy9q1poWf4hjn6Vu1rSv2oBpNF0zprSLnAzEMbNS20huQR4lXwYNw+Q572xoiZOM0q9/ZhSlfijxYkj6d4gmq/+hwUXFX6iXr0/lRKvY9ouMcrp7D7cJnxMI2MfG2i+R6eITuqnpDIsr8jqTW2IZQqzLmak6r1SPJexzL3PZFc4862ypSfILY08+otRa9jXM5GP7r4cwRzRMPP9QxZbtXkMpOYJRWOdIYnqN5UT1mvA+8Xzg3YQeTvf2IZQh/0Bs+QXVTPw6hTHMJY5b77gUOKM7EM5/yCGYFVUBf1DR2zVo1+JL7jQDFMeRcMkQRZUj0lpaGyDr7Y1/M49K21LcEwwTM0CIbOTxxZKFX7C80x2lUwdGg3u4cJr1x3SsMSa9R11/eOdQ0lT4ZGIWXiCNHQGaeG32Kd1r1JAEPvMVoxHcV4htD8CaP+gerI01ozlFLGEzTDcSzRDFVuHTNQHXd5rREAvDV7QDOcxNVTsmq4ROTsKAlLD3S1swcFINvB0QMe4vr94SrQtA7nXbhGSKsb4l0gThHrYYkT1qnJVcYrLkDyhnhzwjvbyEM/jFNs5yKrduzCEKse7mfo9ZD9WkR5FPkBip8E2KicgKHew+oOwbD6WPJlwwI7GH5JfGVMN7vuCIZoKzHBsKrgvxoqGKyOzzLfpDZqWFnwXw1zC1fIbHqr5Wat2dIQrR7itzQlzoocOkd2vuHVsV94vcew9ixs0zAX0DOqu9tNV1z9/xgK6DJCPUw3m4tDN6zMnw0NdGjQlnI/sNnsWgPX8G4r/aGFC1gooPdRsTR2Q/zS/r3nduJUM4yrz+q/aAi9BPy729XLBf6bGnJviHWRP92GoXIDNfEVsNqYF06JH7VhGSbYLY3zEzfDL3HYMVLVMN5/dsNYFb4ij7ydUZ1cHNWaIYYBQnaHZjhGzsNOrkIFrHWNz9P4AUfPG3ZxDRULF4a15r7h3MQTNEPMuTY/WB6d+gNWn/spDcdovcUwqT4l9tjQCOjglTjqcoS73ilP/H49HEOHNBPl906xg56vf/Xvzvg5b7QxDUNqaZRRD+8zjnNvRvKIod16YlijNl8BZRhi1y+lmifMoRnu1stD6BwMG7D8uEZ9XkPKCyw94E09QyfgbKuDnuYZ2roaiXsP+GP1lEQdY/wO7Ic3uurU6POGKf+IaHhap7ewUERHb+Mwf49YSlN5irgW46R6QqKOY+57JKtcA/4JONgJnqA6rp6SnmX9yO9vlfVvij4GztcxXh6qveotTVjXxjn6ujY42iGaIFP7lUdZkmdh8zf+1kXUtYl11pduixR1fSkb95oWWiPl0RjNT1jXPkO/6hEvQoZp4Vp9zhdofj7U0XnTOmuk/ByxwxfqW+taGsm/4QlCKW3fvicpEfc9CdPCvWupxt271r79hzrDm2nzM9Sd9nUXvQ5mSyPYz6aF1viJGbNOOTVvWmgVPVeo8U1UH3MGoi4+zpnuI+7lFsblftq7RX2i5MkYbbkQ8zczcx8XozWGfqvYT4W3jB3yEEr8YY3VCtikMtWH6NExO90mw5g9BVLSdQPEPCw41q3JRKn1sTLY4QWV/U9rDFN5AYKYLY1H5JNu02YlaTKxDj3KpzPsPlvGGWqyPvq1Rdk9wwxsUhqKAfsrLv5Ko6UVBGcMMzZNiWWDXN3E9bYQ1CTEOOXxCbODbYSGNP4GZz+qtYCiviHnUT/s9NuCIfN7ltj4TMsyOmvKN1zXW8kqmOkQ6ha+ZVfjbdl5nFKW3b2JdYgn9jrVUYYbaTzMmsv48o7h9/SPUEr55byTm9u4vNBY3o+QTwrvo5/L6MfPng258qNce+3yOP7OXJbc3kwUM05sMZY5DFCFsgaurYfT+9nn3Sj6fUX1S2mFFeOnhs+8bvWFWsdFLOiHofIXqsa8VrT2R/G8Zx/PPy3iOMTzjvVqPO+X3PhavyrDeCwE9IYjLT4V8bynk9GjU/w6cgHrY5wxvwttuXzuaUz2my+z+emPd2dXZUz2KAH932SLMib7+7N3P07nMx+T/XAlJnsRxt4GXlHtCUI4YWEEZdXTqLBPfnthxuh3vP2ViLL+UxP8Y0ZAnvmtQ0y4LbafL+E/scGGcuPTwfznOPiEhc9wWDZ2y889CJ994PNa/H7v8lMhHsXmzsOHJYhwPN+kMVFEJxdC+U+IaN0nJRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRCt5X8Yn6WD1tYzWAAAAABJRU5ErkJggg==" />
              </Link>
              <Link to="/MovieLists">
                <img src="data:image/png;base64,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" />
              </Link>
              <Link to="/MovieLists">
                <img src="このユーザの動画を見るボタンにしてでMovieListsに行き、MovieListsページにボタンを配置してその情報を取得する方法がらくかも" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="submitMovieContainer">
        <button className="SubmitMovie" onClick={handleSubmit}>
          動画を投稿する
        </button>
      </div>
    </>
  );
};
