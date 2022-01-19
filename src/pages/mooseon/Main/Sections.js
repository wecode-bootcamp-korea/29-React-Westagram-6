import React, { useState } from 'react';

function Sections() {
  return (
    <section>
      <div id="main-right">
        <div className="story">
          <div>
            <img alt="profile" />
            <div>
              <span>wecode_bootcamp</span>
              <span>WeCode | 위코드</span>
            </div>
          </div>
          <div>
            <span>스토리</span>
            <span>모두 보기</span>
          </div>
          <ul>
            <li>
              <div>
                <img src="https://placeimg.com/19/22/any" alt="profile" />
              </div>
              <div>
                <span>_yum_s</span>
                <span>16분 전</span>
              </div>
            </li>
            <li>
              <div>
                <img src="https://placeimg.com/19/21/any" alt="profile" />
              </div>
              <div>
                <span>drink_eat_drink</span>
                <span>3시간 전</span>
              </div>
            </li>
            <li>
              <div>
                <img src="https://placeimg.com/22/22/any" alt="profile" />
              </div>
              <div>
                <span>hyukyc</span>
                <span>20시간 전</span>
              </div>
            </li>
            <li>
              <div>
                <img src="https://placeimg.com/22/22/any" alt="profile" />
              </div>
              <div>
                <span>jminkeek</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="recommend">
          <div>
            <span>회원님을 위한 추천</span>
            <span>모두 보기</span>
          </div>
          <ul>
            <li>
              <div>
                <img src="https://placeimg.com/20/23/any" alt="profile" />
              </div>
              <div>
                <span>joaaaaaahye</span>
                <span>_legend_a님 외 2명이 ...</span>
              </div>
              <div>
                <span>팔로우</span>
              </div>
            </li>
            <li>
              <div>
                <img src="https://placeimg.com/22/19/any" alt="profile" />
              </div>
              <div>
                <span>rampart81</span>
                <span>ringo.in.seoul님 외 12...</span>
              </div>
              <div>
                <span>팔로우</span>
              </div>
            </li>
            <li>
              <div>
                <img src="https://placeimg.com/21/19/any" alt="profile" />
              </div>
              <div>
                <span>shawnjjoo</span>
                <span>jimmylee1220님 외 1...</span>
              </div>
              <div>
                <span>팔로우</span>
              </div>
            </li>
          </ul>
        </div>
        <p>
          Instagram 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙ <br />
          채용 정보 ∙ 개인정보처리방침 ∙ 약관 ∙ <br />
          디렉터리 ∙ 프로필 ∙ 해시태그 ∙ 언어
        </p>
        <span>© 2019 INSTAGRAM </span>
      </div>
    </section>
  );
}

export default Sections;
