console.clear();



function kakao_api(){
    function makeOutListener(infowindow) {
            return function () {
                infowindow.close();
            };
        }
    
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                map.panTo(
                    new kakao.maps.LatLng(
                        position.coords.latitude,
                        position.coords.longitude
                    )
                );
                
            });
        }
        var mapContainer = document.getElementById("map"), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(37.560222, 126.982942), // 지도의 중심좌표
                level: 7 // 지도의 확대 레벨
            };
    
        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
            
        // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
    var positions = [
        /* 경기 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 스타필드고양1F R점</div>' +
            '        <div class="store-location">경기도 고양시 덕양구 고양대로 1955 (동산동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.646213, 126.893264)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 일산가로수길R점</div>' +
            '        <div class="store-location">경기도 고양시 일산서구 대화동 1050-185</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.66568, 126.757559)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 백석점</div>' +
            '        <div class="store-location">경기도 고양시 일산동구 중앙로 1059 (백석동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.643997, 126.786189)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 스타필드하남2F R점</div>' +
            '        <div class="store-location">경기도 하남시 미사대로 750 (신장동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.546156, 127.224386)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 리버사이드팔당DT R점</div>' +
            '        <div class="store-location">경기도 남양주시 와부읍 경강로 772</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.567059, 127.228401)
        },
        /* 서울 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 마곡사이언스타워R점</div>' +
            '        <div class="store-location">서울특별시 강서구 마곡동로 62 (마곡동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.560787, 126.833735)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 스타벅스 합정폴리스R점</div>' +
            '        <div class="store-location">서울특별시 마포구 양화로 45 (서교동, 메세나폴리스)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.551009, 126.913492)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 홍대입구사거리R점</div>' +
            '        <div class="store-location">서울특별시 마포구 양화로 125 (서교동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.554688, 126.92029)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 이대R점</div>' +
            '        <div class="store-location">서울특별시 서대문구 이화여대길 34 (대현동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.55843, 126.945915)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 정부서울청사R점</div>' +
            '        <div class="store-location">서울특별시 종로구 새문안로5가길 28 (적선동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.574243, 126.973516)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 광화문R점</div>' +
            '        <div class="store-location">서울특별시 종로구 세종대로 167, 현대해상본사사옥 별관내 (세종로)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.571212, 126.976322)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 더종로R점</div>' +
            '        <div class="store-location">서울특별시 종로구 종로 51 (종로2가)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.570708, 126.983577)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 을지로내외빌딩R점</div>' +
            '        <div class="store-location">서울특별시 중구 을지로 51 (을지로2가)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.566454, 126.983667)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 서소문로</div>' +
            '        <div class="store-location">서울특별시 중구 서소문로 120 (서소문동) 대한빌딩</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.562993, 126.974512)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 대한상공회의소R점</div>' +
            '        <div class="store-location">서울특별시 중구 세종대로 39 상공회의소회관 1층</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.560731, 126.973897)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 용산역써밋R점</div>' +
            '        <div class="store-location">서울특별시 용산구 한강대로 69 (한강로2가, 용산푸르지오써밋)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.527418, 126.965894)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 한강진역R점</div>' +
            '        <div class="store-location">서울특별시 용산구 이태원로 252 (한남동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.537088, 127.001065)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 한남동R점</div>' +
            '        <div class="store-location">서울특별시 용산구 독서당로 94 (한남동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.534774, 127.010926)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 여의도공원R점</div>' +
            '        <div class="store-location">서울특별시 영등포구 여의공원로 101 (여의도동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.529203, 126.925237)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 여의도KBS R점</div>' +
            '        <div class="store-location">서울특별시 영등포구 의사당대로 26 (여의도동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.526576, 126.918188)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 여의도역R점</div>' +
            '        <div class="store-location">서울특별시 영등포구 의사당대로 83 (여의도동) 1층</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.523325, 126.923449)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 여의도IFC몰(L1)R점</div>' +
            '        <div class="store-location">서울특별시 영등포구 국제금융로 10 (여의도동) 지하1층 178호</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.524937, 126.925285)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 타임스퀘어R점</div>' +
            '        <div class="store-location">서울특별시 영등포구 영중로 15 지하 1층 (영등포동4가)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.517007, 126.904142)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 보라매공원R점</div>' +
            '        <div class="store-location">서울특별시 동작구 보라매로5길 35 (신대방동, 파크스퀘어,보라매현대APT)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.492043, 126.923421)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 관악서울대입구R점</div>' +
            '        <div class="store-location">서울특별시 관악구 관악로 158 (봉천동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.47927, 126.952798)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 사당</div>' +
            '        <div class="store-location">서울특별시 관악구 남부순환로 2082-25</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.476009, 126.980999)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 이수역</div>' +
            '        <div class="store-location">서울특별시 서초구 동작대로 112 (방배동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.486466, 126.98274)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 파미에파크R점</div>' +
            '        <div class="store-location">서울특별시 서초구 사평대로 205 (반포동) CENTRALCITY</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.505119, 127.009691)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 강남대로논현R점</div>' +
            '        <div class="store-location">서울특별시 서초구 강남대로85길 5 (반포동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.507328, 127.022582)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 강남교보타워R점</div>' +
            '        <div class="store-location">서울특별시 서초구 강남대로 465 (서초동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.503721, 127.024097)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 강남R점</div>' +
            '        <div class="store-location">서울특별시 강남구 강남대로 390 (역삼동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.499907, 127.037393)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 양재강남빌딩R점</div>' +
            '        <div class="store-location">서울특별시 강남구 남부순환로 2621 (도곡동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.485266, 127.036703)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 양재역</div>' +
            '        <div class="store-location">서울특별시 서초구 강남대로 202 (양재동) 모산빌딩</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.482324, 127.036827)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 SSG마켓도곡R점</div>' +
            '        <div class="store-location">서울특별시 강남구 언주로30길 57, 타워팰리스Ⅱ F 지하1층 (도곡동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.490078, 127.054938)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 선릉동신빌딩R점</div>' +
            '        <div class="store-location">서울특별시 강남구 테헤란로 409 (삼성동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.505282, 127.050481)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 압구정R점</div>' +
            '        <div class="store-location">서울특별시 강남구 언주로 861 (신사동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.526264, 127.029519)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 압구정로데오역</div>' +
            '        <div class="store-location">서울특별시 강남구 선릉로 836, 삼원빌딩 1,2층 (청담동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.526506, 127.040518)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 청담스타R점</div>' +
            '        <div class="store-location">서울특별시 강남구 도산대로57길 24 (청담동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.52523, 127.041794)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 스탈릿대치R점</div>' +
            '        <div class="store-location">서울특별시 강남구 남부순환로 2947 (대치동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.494519, 127.062633)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 삼성역섬유센터R점</div>' +
            '        <div class="store-location">서울특별시 강남구 테헤란로 518 (대치동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.507551, 127.060561)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 스타필드코엑스몰R점</div>' +
            '        <div class="store-location">서울특별시 강남구 영동대로 513 (삼성동) 코엑스 A106호</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.509965, 127.061581)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 수서역R점</div>' +
            '        <div class="store-location">서울특별시 강남구 광평로 281 (수서동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.487972, 127.102651)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 문정법원로R점</div>' +
            '        <div class="store-location">서울특별시 송파구 송파대로 201 (문정동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.487306, 127.120673)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 스타필드위례1F R점</div>' +
            '        <div class="store-location">경기도 하남시 학암동 90-33 위례스타필드)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.487545, 127.155131)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 천호로데오</div>' +
            '        <div class="store-location">서울특별시 강동구 천호대로 1037 (천호동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.537807, 127.127309)
        },
    
        /* 부천 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 부천신중동역</div>' +
            '        <div class="store-location">경기도 부천시 길주로 281 (중동) 동화빌딩</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.503713, 126.774131)
        },
        /* 송도 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 송도트리플R점</div>' +
            '        <div class="store-location">인천광역시 연수구 송도과학로16번길 33-1 (송도동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.380466, 126.659155)
        },
        /* 시흥 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 시흥P.아울렛 3F</div>' +
            '        <div class="store-location">경기도 시흥시 서해안로 699 (정왕동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.379763, 126.736405)
        },
        /* 안양 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 평촌역사거리</div>' +
            '        <div class="store-location">경기도 안양시 동안구 시민대로 311 금강스마트 빌딩 1층(관양동1746)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.395836, 126.964971)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 안양역R점</div>' +
            '        <div class="store-location">경기도 안양시 만안구 만안로 232 (안양동) 안양민자역사 1층 001호</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.402133, 126.922518)
        },
        /* 용인 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 기흥역AK R점</div>' +
            '        <div class="store-location">경기도 용인시 기흥구 기흥역로 63 (구갈동, 기흥역 힐스테이트)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.274916, 127.116566)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 용인에버랜드R점</div>' +
            '        <div class="store-location">경기도 용인시 처인구 포곡읍 에버랜드로 199</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.294721, 127.203191)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 용인죽전역R점</div>' +
            '        <div class="store-location">경기도 용인시 수지구 용구대로 2750 (죽전동, 죽전 효성해링턴 플레이스)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.331148, 127.109343)
        },
        /* 분당 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 분당구청</div>' +
            '        <div class="store-location">경기도 성남시 분당구 분당로 43 (서현동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.384048, 127.120255)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 판교아비뉴프랑R점</div>' +
            '        <div class="store-location">경기도 성남시 분당구 동판교로177번길 25 (삼평동, 판교 호반 써밋 플레이스)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.39777, 127.11339)
        },
        /* 수원 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 영통R점</div>' +
            '        <div class="store-location">경기도 수원시 영통구 덕영대로 1566 (영통동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.245245, 127.061381)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 수원이비스</div>' +
            '        <div class="store-location">경기도 수원시 팔달구 권광로 132 (인계동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.25927, 127.031188)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 광교엘포트R점</div>' +
            '        <div class="store-location">경기도 수원시 영통구 광교중앙로 145 (이의동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.286885, 127.057833)
        },
        /* 동탄 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 동탄카림R점</div>' +
            '        <div class="store-location">경기도 화성시 동탄대로시범길 134 (청계동, 시범 반도유보라 아이비파크4.0)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.199208, 127.113042)
        },
        /* 양평 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 더양평DT R점</div>' +
            '        <div class="store-location">경기도 양평군 양평읍 양근로 76</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.497209, 127.481923)
        },
        /* 강원도 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 춘천구봉산R점</div>' +
            '        <div class="store-location">강원도 춘천시 동면 순환대로 1154-63</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(37.888441, 127.775936)
        },
        /* 대전 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 대전중앙로R점</div>' +
            '        <div class="store-location">대전광역시 중구 대종로 486 (은행동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(36.327936, 127.426607)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 대전노은</div>' +
            '        <div class="store-location">대전광역시 유성구 은구비남로33번길 26, 1~2층 (지족동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(36.373458, 127.319521)
        },
        /* 충청도 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 천안신부R점</div>' +
            '        <div class="store-location">충청남도 천안시 동남구 만남로 43 (신부동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(36.819317, 127.157709)
        },
        /* 전라도 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 전주한옥마을</div>' +
            '        <div class="store-location">전라북도 전주시 완산구 팔달로 123 (전동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.813433, 127.148547)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 광주상무교대점</div>' +
            '        <div class="store-location">광주광역시 서구 상무중앙로 90, 눈높이상무센터 1층 (치평동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.154904, 126.84891)
        },
    
        /* 대구 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 대구수성호R점</div>' +
            '        <div class="store-location">대구광역시 수성구 용학로 56 (두산동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.826147, 128.615977)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 대구상인역</div>' +
            '        <div class="store-location">대구광역시 달서구 월배로 210 (상인동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.81831, 128.536598)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 대구그랜드호텔R점</div>' +
            '        <div class="store-location">대구광역시 수성구 동대구로 305 (범어동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.857704, 128.625199)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 신세계대구F8 R점</div>' +
            '        <div class="store-location">대구광역시 동구 동부로 149 신세계백화점 대구점 8층</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.87782, 128.628453)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 대구칠곡</div>' +
            '        <div class="store-location">대구광역시 북구 학정로 422 (구암동) 태을빌딩</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.942251, 128.563883)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 대구팔공산</div>' +
            '        <div class="store-location">대구광역시 동구 파계로 650</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.987916, 128.636261)
        },
        /* 김해 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 신세계김해R점</div>' +
            '        <div class="store-location">경상남도 김해시 김해대로 2232 신세계백화점 1층</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.228866, 128.872674)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 김해율하</div>' +
            '        <div class="store-location">경상남도 김해시 율하3로91번길 30-5</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.176336, 128.812848)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 창원상남동R점</div>' +
            '        <div class="store-location">경상남도 창원시 성산구 상남로 132 (상남동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.2245, 128.683952)
        },
        /* 울산 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 울산간절곶</div>' +
            '        <div class="store-location">울산광역시 울주군 서생면 대송리 25-18</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.359074, 129.359177)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 울산삼산타워</div>' +
            '        <div class="store-location">울산광역시 남구 삼산로 273 (삼산동) 삼산타워</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.539531, 129.336779)
        },
        /* 부산 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 범일교차로</div>' +
            '        <div class="store-location">부산광역시 동구 조방로 4 (범일동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.137801, 129.063871)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 부산광복로R점</div>' +
            '        <div class="store-location">부산광역시 중구 광복중앙로 8-2 (광복동3가)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.100091, 129.031347)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 서면로중앙대로R점</div>' +
            '        <div class="store-location">부산광역시 부산진구 중앙대로 672 (부전동) 1층 2층</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.152815, 129.059521)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 서면로R점</div>' +
            '        <div class="store-location">부산광역시 부산진구 서면로 49-1 (부전동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.155182, 129.05766)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 더해운대R점</div>' +
            '        <div class="store-location">부산광역시 해운대구 해운대해변로 197 (우동, 해운대경동제이드아파트)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.158398, 129.153054)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 해운대달맞이R점</div>' +
            '        <div class="store-location">부산광역시 해운대구 달맞이길 189 (중동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.157938, 129.182304)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 부산덕천역R점</div>' +
            '        <div class="store-location">부산광역시 북구 만덕대로 30 (덕천동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(35.210668, 129.008463)
        },
        /* 세종 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 세종어진R점</div>' +
            '        <div class="store-location">세종특별자치시 한누리대로 499 (어진동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(36.508208, 127.261241)
        },
        /* 제주도 */
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 제주신화월드R점</div>' +
            '        <div class="store-location">제주특별자치도 서귀포시 안덕면 신화역사로304번길 38 B1-29</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(33.306519, 126.316677)
        },
        {
            content:
            '<div class="store-popup">' +
            '    <div class="left-item">' +
            '        <div class="store-name">스타벅스 제주중문</div>' +
            '        <div class="store-location">제주특별자치도 서귀포시 중문관광로110번길 32 (색달동)</div>'+
            '    </div>' +

            '</div>',
            latlng: new kakao.maps.LatLng(33.251256, 126.412578)
        }
    ];

// 지점추가시

/*
{
    content:
    '<div class="store-popup">' +
    '    <div class="left-item">' +
    '        <div class="store-name">스타벅스 지점명</div>' +
    '        <div class="store-location">지점주소</div>'+
    '    </div>' +
    '    <div class="right-item">' +
    '        <div class="store-time-title">운영시간</div>' +
    '        <div class="mon">월 : </div>' +
    '        <div class="tou">화 : </div>' +
    '        <div class="wen">수 : </div>' +
    '        <div class="thu">목 : </div>' +
    '        <div class="fei">금 : </div>' +
    '        <div class="ser">토 : </div>' +
    '        <div class="sun">일 : </div>' +
    '    </div>' +
    '</div>',
    latlng: new kakao.maps.LatLng(위도, 경도)
},
*/



    var imageSrc =
        "https://kkt9102.github.io/img1/blog/article/portfolio/reserve/pin_reserve.png";
    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    // 지도에 마커를 표시합니다
    for (var i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(30, 44);
    
        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커의 위치
            image: markerImage // 마커 이미지
        });
        var iwRemoveable = true;
    
        var infowindow = new kakao.maps.InfoWindow({
            content: positions[i].content,
            removable: iwRemoveable
        });
        kakao.maps.event.addListener(
            marker,
            "click",
            makeOverListener(map, marker, infowindow)
        );
       
    }
    
    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
        return function () {
            infowindow.open(map, marker);
        };
    }
    
    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
        return function () {
            infowindow.close();
        };
    }
    }
    
    $(function(){
        kakao_api();
    })