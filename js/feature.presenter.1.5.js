/*! Copyright (c) 2015 vaynelabs (http://codecanyon.net/user/vaynelabs)
 * Version: 1.5
 * Requires: jQuery
 */

function FeaturePresenter(_0x2410x2, _0x2410x3, _0x2410x4) {
    var _0x2410x5 = {
        circle_radius: 220,
        normal_feature_size: 100,
        highlighted_feature_size: 150,
        top_margin: 100,
        bottom_margin: 50,
        spacing: 40,
        min_padding: 50,
        heading_font_size: 30,
        description_font_size: 20,
        animation_mode: js,
        type: null,
        color: black,
        border_width: 3
    },
        _0x2410x6 = $[extend]({}, _0x2410x5, _0x2410x4);
    this[circle_radius] = _0x2410x6[circle_radius], this[normal_feature_size] = _0x2410x6[normal_feature_size], this[highlighted_feature_size] = _0x2410x6[highlighted_feature_size], this[features] = _0x2410x3, this[index] = $(.feature - presenter - circle - container)[length] + 1, this[element] = _0x2410x2, this[present_set] = -1, this[total_sets] = 0, this[animations] = {
        frame_index: -1,
        old_angle: -1
    }, this[other_settings] = {
        top_margin: _0x2410x6[top_margin],
        bottom_margin: _0x2410x6[bottom_margin],
        spacing: _0x2410x6[spacing],
        min_padding: _0x2410x6[min_padding]
    }, this[heading_font_size] = _0x2410x6[heading_font_size], this[description_font_size] = _0x2410x6[description_font_size], this[text_container_size] = -1, this[circle_left_margin] = -1, this[animation_mode] = _0x2410x6[animation_mode], js == this[animation_mode] && void (0) == window[requestAnimationFrame] && (this[animation_mode] = css), this[animated_once] = -1, this[type] = _0x2410x6[type], icon == this[type] && (this[color] = _0x2410x6[color], this[border_width] = _0x2410x6[border_width]);
    for (var _0x2410x7, _0x2410x8, _0x2410x9 = _0x2410x2[width](), _0x2410xa = 2 * this[circle_radius] + this[normal_feature_size] / 2 + this[highlighted_feature_size] / 2, _0x2410xb = _0x2410x9 - _0x2410xa - this[other_settings][spacing] - 2 * this[other_settings][min_padding], _0x2410xc = [], _0x2410xd = 0; _0x2410xd < _0x2410x3[length]; _0x2410xd++) {
        _0x2410x2[html](< div style="display:inline-block"
            class="feature-presenter-text-container" > < div class="feature-presenter-text-heading"
                style="font-size:+this[heading_font_size]+px" > +_0x2410x3[_0x2410xd][heading] + < /div><div class="feature-presenter-text-description" style="font-size:+this[description_font_size]+px">+_0x2410x3[_0x2410xd][description]+</div > < /div>),_0x2410xc[push](_0x2410x2[find](.feature-presenter-text-container)[width]())};_0x2410x7=Math[max][apply](Math,_0x2410xc),_0x2410x8=_0x2410x9-(2*this[other_settings][min_padding]+_0x2410xa+this[other_settings][spacing]+_0x2410x7),0==_0x2410x8?(this[circle_left_margin]=this[other_settings][min_padding]+this[normal_feature_size]/2, this[text_container_size] = _0x2410x7): _0x2410x8 > 0 ? (this[circle_left_margin] = (_0x2410x9 - (_0x2410xa + this[other_settings][spacing] + _0x2410x7)) / 2 + this[normal_feature_size] / 2, this[text_container_size] = _0x2410x7) : (this[circle_left_margin] = this[other_settings][min_padding] + this[normal_feature_size] / 2, this[text_container_size] = _0x2410xb),
		this[text_container_size_whole] = this[text_container_size] + this[highlighted_feature_size] / 2 + this[other_settings][spacing];
	}
	FeaturePresenter[prototype][createPresenter] = function() {
		var _0x2410x2, _0x2410x3, _0x2410x4, _0x2410x5, _0x2410x6, _0x2410x7, _0x2410x8 = 2 * Math[PI] / this[features][length],
			_0x2410x9 = (360 / this[features][length])[toFixed](2),
			_0x2410xa = ,
			_0x2410xb = (this[normal_feature_size] / this[highlighted_feature_size])[toFixed](2),
			_0x2410xc = Math[floor](180 / _0x2410x9);
		$(body)[append]( < style id="feature-presenter-animations-+this[index]+" > < /style>);for(var _0x2410xd=0;_0x2410xd<this[features][length];_0x2410xd++){_0x2410x2 = (this[circle_radius] - this[circle_radius] * Math[sin]((_0x2410xd + 1) * _0x2410x8) - this[highlighted_feature_size] / 2)[toFixed](2) - (icon == this[type] ? this[border_width] : 0), _0x2410x3 = (this[circle_radius] + this[circle_radius] * Math[cos]((_0x2410xd + 1) * _0x2410x8) - this[highlighted_feature_size] / 2)[toFixed](2) - (icon == this[type] ? this[border_width] : 0), icon == this[type] ? (_0x2410x5 = transform: translate(+_0x2410x3 + px, +_0x2410x2 + px) scale(+(_0x2410xd == this[features][length] - 1 ? 1 : _0x2410xb) + );, _0x2410x5 += -webkit - transform: translate(+_0x2410x3 + px, +_0x2410x2 + px) scale(+(_0x2410xd == this[features][length] - 1 ? 1 : _0x2410xb) + );, _0x2410x5 += width: +this[highlighted_feature_size] + px;, _0x2410x5 += height: +this[highlighted_feature_size] + px;, js == this[animation_mode] && (_0x2410x5 += transition: initial;, _0x2410x5 += -webkit - transition: initial;), _0x2410x5 += border: +this[border_width] + px solid + this[color],
		_0x2410x6 = line - height: +this[highlighted_feature_size] + px!important;, _0x2410x6 += color: +this[color] + ;) : image == this[type] && (_0x2410x5 = transform: translate(+_0x2410x3 + px, +_0x2410x2 + px);, _0x2410x5 += -webkit - transform: translate(+_0x2410x3 + px, +_0x2410x2 + px);, _0x2410x5 += width: +this[highlighted_feature_size] + px;, _0x2410x5 += height: +this[highlighted_feature_size] + px;, _0x2410x6 = transform: scale(+(_0x2410xd == this[features][length] - 1 ? 1 : _0x2410xb) + );, _0x2410x6 += -webkit - transform: scale(+(_0x2410xd == this[features][length] - 1 ? 1 : _0x2410xb) + );, js == this[animation_mode] && (_0x2410x6 += transition: initial;, _0x2410x6 += -webkit - transition: initial;), navigator[userAgent][toLowerCase]()[indexOf](chrome) > -1 && (_0x2410x6 += box - shadow: none;)), image == this[type] ? _0x2410xa += < div class="feature-presenter+(_0x2410xd==this[features][length]-1? feature-presenter-highlighted:)+"
                        data - position = "+_0x2410x3+*+_0x2410x2+"
		data - feature - init = "+(_0x2410xd+1)+"
		data - feature = "+(_0x2410xd+1)+"
		data - set = "+(_0x2410xd==this[features][length]-1?0:_0x2410xc>=_0x2410xd+1?_0x2410xd+1:-(this[features][length]-(_0x2410xd+1)))+"
		style = "+_0x2410x5+" > < img src="+this[features][_0x2410xd][image]+"
                        style="+_0x2410x6+" /> < /div>:icon==this[type]&&(_0x2410xa+=<div class="feature-presenter feature-presenter-icon+(_0x2410xd==this[features][length]-1? feature-presenter-highlighted:)+" data-position="+_0x2410x3+*+_0x2410x2+" data-feature-init="+(_0x2410xd+1)+" data-feature="+(_0x2410xd+1)+" data-set="+(_0x2410xd==this[features][length]-1?0:_0x2410xc>=_0x2410xd+1?_0x2410xd+1:-(this[features][length]-(_0x2410xd+1)))+" style="+_0x2410x5+"><i class="fa fa-+this[features][_0x2410xd][image]+" style="+_0x2410x6+"></i > < /div>)};_0x2410x4=.feature-presenter-circle-container-+this[index]+ {,_0x2410x4+=margin-top: +this[other_settings][top_margin]+px;,_0x2410x4+=margin-left: +this[circle_left_margin]+px;,_0x2410x4+=margin-right: +this[highlighted_feature_size]/2 + px;, _0x2410x4 += margin - bottom : +this[other_settings][bottom_margin] + px;, _0x2410x4 += position: relative;, _0x2410x4 += width: +2 * this[circle_radius] + px;, _0x2410x4 += height: +2 * this[circle_radius] + px;, js == this[animation_mode] && (_0x2410x4 += transition: initial;, _0x2410x4 += -webkit - transition: initial;), icon == this[type] && (_0x2410x4 += border: +(this[border_width] - 1) + px solid + this[color] + ;, _0x2410x4 += box - shadow: none!important;), _0x2410x4 +=
	}, $(# feature - presenter - animations - +this[index])[get](0)[sheet][insertRule](_0x2410x4, 0), this[element][html]( < div class="feature-presenter-circle-container feature-presenter-circle-container-+this[index]+" > +_0x2410xa + < /div><div class="feature-presenter-text-container" style="width:+this[text_container_size]+px;margin-left:+this[other_settings][spacing]+px;"><div class="feature-presenter-text-heading" style="font-size:+this[heading_font_size]+px">+this[features][this[features][length]-1][heading]+</div > < div class="feature-presenter-text-description"
                            style="font-size:+this[description_font_size]+px" > +this[features][this[features][length] - 1][description] + < /div></div > )[css](overflow, hidden), this[element][find](.feature - presenter - text - container)[css](margin - top, this[other_settings][top_margin] + (2 * this[circle_radius] - this[element][find](.feature - presenter - text - container)[height]() <= 0 ? 0 : (2 * this[circle_radius] - this[element][find](.feature - presenter - text - container)[height]()) / 2) + px), _0x2410x7 = 100 * this[other_settings][spacing] / this[element][find](.feature - presenter - text - container)[width](), _0x2410x4 = .feature - presenter - text - in -+this[index] + {, _0x2410x4 += transform: translate(+_0x2410x7 + % , 0)!important;, _0x2410x4 += -webkit - transform: translate(+_0x2410x7 + % , 0)!important;, _0x2410x4 +=
	}, $(# feature - presenter - animations - +this[index])[get](0)[sheet][insertRule](_0x2410x4, 1), this[bindEvents]();
}, FeaturePresenter[prototype][bindEvents] = function() {
                                js == this[animation_mode] ? this[element][find](.feature - presenter)[on](click, {
                                parent: this
	}, this[clickEventJS]) : css == this[animation_mode] && (image == this[type] ? (this[element][find](.feature - presenter)[on](click, {
                                parent: this
	}, this[clickEventCSS]), -1 == this[animated_once] && this[element][find](.feature - presenter img)[on](transitionend webkitTransitionEnd, {
                                parent: this
	}, this[transitionEndEvent])) : icon == this[type] && ($(.feature - presenter)[on](click, {
                                parent: this
	}, this[clickEventCSS]), -1 == this[animated_once] && this[element][find](.feature - presenter)[on](transitionend webkitTransitionEnd, {
                                parent: this
	}, this[transitionEndEvent]))), -1 == this[animated_once] && (this[animated_once] = 1)
}, FeaturePresenter[prototype][unbindEvents] = function() {
                                this[element][find](.feature - presenter)[off](click)
}, FeaturePresenter[prototype][clickEventJS] = function(_0x2410x2) {
                                _0x2410x2[data][parent][unbindEvents](); {
		var _0x2410x3 = parseInt($(this)[attr](data - set), 10),
			_0x2410x4 = (360 / _0x2410x2[data][parent][features][length])[toFixed](2);
		$(.feature - presenter - circle - container - +_0x2410x2[data][parent][index]);
	}
	return 0 == _0x2410x3 ? void(_0x2410x2)[data][parent][bindEvents]() : (_0x2410x2[data][parent][present_set] = _0x2410x3, _0x2410x2[data][parent][animations][frame_index] = 0, _0x2410x2[data][parent][animations][old_angle] = _0x2410x2[data][parent][total_sets] * _0x2410x4, void(_0x2410x2)[data][parent][animateJS](this, $(this)[attr](data - feature)));
}, FeaturePresenter[prototype][clickEventCSS] = function(_0x2410x2) {
                                _0x2410x2[data][parent][unbindEvents]();
                            var _0x2410x3, _0x2410x4, _0x2410x5, _0x2410x6, _0x2410x7 = parseInt($(this)[attr](data - set), 10),
		_0x2410x8 = (360 / _0x2410x2[data][parent][features][length])[toFixed](2),
		_0x2410x9 = (_0x2410x2[data][parent][normal_feature_size] / _0x2410x2[data][parent][highlighted_feature_size])[toFixed](2),
		_0x2410xa = $(.feature - presenter - circle - container - +_0x2410x2[data][parent][index]);
	return 0 == _0x2410x7 ? void(_0x2410x2)[data][parent][bindEvents]() : (_0x2410x3 = _0x2410x7 * _0x2410x8, 180 == _0x2410x3 && (_0x2410x3 = 179.9), _0x2410x3 += _0x2410x2[data][parent][total_sets] * _0x2410x8, image == _0x2410x2[data][parent][type] ? (_0x2410xa[css]({
                                transform: rotate(+_0x2410x3 + deg),
		"-webkit-transform": rotate(+_0x2410x3 + deg)
	}), _0x2410xa[find](.feature - presenter img)[css]({
                                transform: rotate(+-_0x2410x3 + deg) scale(+_0x2410x9 + ),
		"-webkit-transform": rotate(+-_0x2410x3 + deg) scale(+_0x2410x9 + )
	}), $(this)[find](img)[css]({
                                transform: rotate(+-_0x2410x3 + deg) scale(1),
		"-webkit-transform": rotate(+-_0x2410x3 + deg) scale(1)
	}), _0x2410xa[find](.feature - presenter - highlighted img)[css]({
                                transform: rotate(+-_0x2410x3 + deg) scale(+_0x2410x9 + ),
		"-webkit-transform": rotate(+-_0x2410x3 + deg) scale(+_0x2410x9 + )
	})) : icon == _0x2410x2[data][parent][type] && (_0x2410x4 = $(this)[attr](data - feature - init), _0x2410xa[css](transform, rotate(+_0x2410x3 + deg)), _0x2410xa[find](.feature - presenter)[each](function() {
                                _0x2410x5 = $(this)[attr](data - position)[split]( * ), _0x2410x6 = translate(+_0x2410x5[0] + px, +_0x2410x5[1] + px) rotate(+-_0x2410x3 + deg), _0x2410x6 += $(this)[hasClass](feature - presenter - highlighted) ? scale(+_0x2410x9 + ) : $(this)[attr](data - feature - init) == _0x2410x4 ? scale(1) : scale(+_0x2410x9 + ), $(this)[css]({
                                transform: _0x2410x6,
			"-webkit-transform": _0x2410x6
		})
	})), _0x2410x2[data][parent][present_set] = _0x2410x7, _0x2410x2[data][parent][total_sets] += _0x2410x7, void($)(this)[closest](.feature - presenter - circle - container)[next]()[addClass](feature - presenter - text - container - out)[on](transitionend webkitTransitionEnd, _0x2410x2[data][parent][textTransitionEndEvent]));
}, FeaturePresenter[prototype][easeInOutQuad] = function(_0x2410x2, _0x2410x3, _0x2410x4, _0x2410x5, _0x2410x6) {
	return (_0x2410x3 /= _0x2410x6 / 2) < 1 ? _0x2410x5 / 2 * _0x2410x3 * _0x2410x3 + _0x2410x4 : -_0x2410x5 / 2 * (--_0x2410x3 * (_0x2410x3 - 2) - 1) + _0x2410x4
}, FeaturePresenter[prototype][animateJS] = function(_0x2410x2, _0x2410x3) {
	var _0x2410x4 = this;
	this[animations][frame_index]++, 1 == this[animations][frame_index] && ($(_0x2410x2)[closest](.feature - presenter - circle - container)[next]()[addClass](feature - presenter - text - container - out)[on](transitionend webkitTransitionEnd, _0x2410x4[textTransitionEndEvent]), image == _0x2410x4[type] && $(_0x2410x2)[parent]()[find](.feature - presenter img)[css](filter, inherit)), requestAnimationFrame(function() {
		var _0x2410x5, _0x2410x6, _0x2410x7, _0x2410x8 = 7 * (Math[abs](_0x2410x4[present_set]) - 1) + 30,
			_0x2410x9 = $(.feature - presenter - circle - container - +_0x2410x4[index]),
			_0x2410xa = (360 / _0x2410x4[features][length])[toFixed](2),
			_0x2410xb = _0x2410x4[present_set] * _0x2410xa,
			_0x2410xc = _0x2410x4[animations][old_angle] + _0x2410x4[easeInOutQuad](_0x2410x4[animations][frame_index] / _0x2410x8, _0x2410x4[animations][frame_index] - 1, 0, _0x2410xb, _0x2410x8),
			_0x2410xd = parseFloat(_0x2410x4[normal_feature_size] / _0x2410x4[highlighted_feature_size]),
			_0x2410xe = _0x2410x4[easeInOutQuad](_0x2410x4[animations][frame_index] / _0x2410x8, _0x2410x4[animations][frame_index] - 1, 0, 1 - _0x2410xd, _0x2410x8),
			_0x2410xf = _0x2410x4[animations][frame_index] <= _0x2410x8 - 1 ? 0 : 1;
		if (image == _0x2410x4[type] ? (console[log](1), _0x2410x9[css]({
                                transform: rotate(+_0x2410xc + deg),
			"-webkit-transform": rotate(+_0x2410xc + deg)
		}), _0x2410x9[find](.feature - presenter img)[css]({
                                transform: rotate(+-_0x2410xc + deg) scale(+_0x2410xd + ) translateZ(0),
			"-webkit-transform": rotate(+-_0x2410xc + deg) scale(+_0x2410xd + ) translateZ(0)
		}), $(_0x2410x2)[find](img)[css]({
                                transform: rotate(+-_0x2410xc + deg) scale(+(1 == _0x2410xf ? 1 : _0x2410xd + _0x2410xe) + ) translateZ(0),
			"-webkit-transform": rotate(+-_0x2410xc + deg) scale(+(1 == _0x2410xf ? 1 : _0x2410xd + _0x2410xe) + ) translateZ(0)
		}), _0x2410x9[find](.feature - presenter - highlighted img)[css]({
                                transform: rotate(+-_0x2410xc + deg) scale(+(1 - _0x2410xe) + ) translateZ(0),
			"-webkit-transform": rotate(+-_0x2410xc + deg) scale(+(1 - _0x2410xe) + ) translateZ(0)
		})) : icon == _0x2410x4[type] && (_0x2410x7 = $(_0x2410x2)[attr](data - feature - init), _0x2410x9[css](transform, rotate(+_0x2410xc + deg)), _0x2410x9[find](.feature - presenter)[each](function() {
                                _0x2410x5 = $(this)[attr](data - position)[split]( * ), _0x2410x6 = translate(+_0x2410x5[0] + px, +_0x2410x5[1] + px) rotate(+-_0x2410xc + deg), _0x2410x6 += $(this)[hasClass](feature - presenter - highlighted) ? scale(+(1 - _0x2410xe) + ) : $(this)[attr](data - feature - init) == _0x2410x7 ? scale(+(1 == _0x2410xf ? 1 : _0x2410xd + _0x2410xe) + ) : scale(+_0x2410xd + ), $(this)[css]({
                                transform: _0x2410x6,
				"-webkit-transform": _0x2410x6
			})
		})), 0 == _0x2410xf) {
                                _0x2410x4[animateJS](_0x2410x2, _0x2410x3)
                            } else {
			if (1 == _0x2410xf) {
				var _0x2410x7, _0x2410x10, _0x2410x11, _0x2410x12, _0x2410x7, _0x2410x13, _0x2410x14 = _0x2410x4[present_set],
					_0x2410x15 = _0x2410x4[features][length],
					_0x2410x16 = Math[floor](180 / (360 / _0x2410x15)[toFixed](2));
				_0x2410x9[find](.feature - presenter - highlighted)[removeClass](feature - presenter - highlighted), _0x2410x9[find](.feature - presenter)[each](function() {
                                _0x2410x12 = $(this)[attr](data - feature), _0x2410x10 = 0 >= (_0x2410x12 - _0x2410x14) % _0x2410x15 ? (_0x2410x12 - _0x2410x14) % _0x2410x15 + _0x2410x15 : (_0x2410x12 - _0x2410x14) % _0x2410x15, _0x2410x11 = _0x2410x10 == _0x2410x15 ? 0 : _0x2410x16 >= _0x2410x10 ? _0x2410x10 : -(_0x2410x15 - _0x2410x10), $(this)[attr](data - feature, _0x2410x10)[attr](data - set, _0x2410x11), _0x2410x12 == _0x2410x3 && ($(this)[addClass](feature - presenter - highlighted), _0x2410x7 = $(this)[attr](data - feature - init))
				}), _0x2410x4[total_sets] += _0x2410x14, $(_0x2410x2)[closest](.feature - presenter - circle - container)[after]( < div class="feature-presenter-text-container" > < div class="feature-presenter-text-heading"
                                style="-webkit-transform:translate(-150%,0);transform:translate(-150%,0);width:+_0x2410x4[text_container_size]+px;font-size:+_0x2410x4[heading_font_size]+px" > +_0x2410x4[features][_0x2410x7 - 1][heading] + < /div><div class="feature-presenter-text-description" style="-webkit-transform:translate(-150%,0);transform:translate(-150%,0);width:+_0x2410x4[text_container_size]+px;font-size:+_0x2410x4[description_font_size]+px">+_0x2410x4[features][_0x2410x7-1][description]+</div > < /div>),_0x2410x13=$(_0x2410x2)[closest](.feature-presenter-circle-container)[next](),_0x2410x13[css](margin-top,_0x2410x4[other_settings][top_margin]+(2*_0x2410x4[circle_radius]-_0x2410x13[height]()<=0?0:(2*_0x2410x4[circle_radius]-_0x2410x13[height]())/2) + px), _0x2410x13[width](_0x2410x13[width]() + _0x2410x4[other_settings][spacing]), _0x2410x13[find](.feature - presenter - text - heading)[addClass](feature - presenter - text - in -+_0x2410x4[index]), _0x2410x13[find](.feature - presenter - text - description)[addClass](feature - presenter - text - in -+_0x2410x4[index]), _0x2410x4[bindEvents]();
		}
	};
	});
}, FeaturePresenter[prototype][transitionEndEvent] = function(_0x2410x2) {
	var _0x2410x3, _0x2410x4, _0x2410x5 = _0x2410x2[data][parent][present_set],
		_0x2410x6 = image == _0x2410x2[data][parent][type] ? $(this)[parent]()[attr](data - feature) : $(this)[attr](data - feature),
		_0x2410x7 = image == _0x2410x2[data][parent][type] ? $(this)[parent]()[attr](data - feature - init) : $(this)[attr](data - feature - init),
		_0x2410x8 = _0x2410x2[data][parent][features][length],
		_0x2410x9 = Math[floor](180 / (360 / _0x2410x8)[toFixed](2)),
		_0x2410xa = 0 >= (_0x2410x6 - _0x2410x5) % _0x2410x8 ? (_0x2410x6 - _0x2410x5) % _0x2410x8 + _0x2410x8 : (_0x2410x6 - _0x2410x5) % _0x2410x8,
		_0x2410xb = _0x2410xa == _0x2410x8 ? 0 : _0x2410x9 >= _0x2410xa ? _0x2410xa : -(_0x2410x8 - _0x2410xa),
		_0x2410xc = this;
	image == _0x2410x2[data][parent][type] ? ($(this)[parent]()[removeClass](feature - presenter - highlighted)[attr](data - feature, _0x2410xa)[attr](data - set, _0x2410xb), 0 == _0x2410xb && $(this)[parent]()[addClass](feature - presenter - highlighted)) : icon == _0x2410x2[data][parent][type] && ($(this)[removeClass](feature - presenter - highlighted)[attr](data - feature, _0x2410xa)[attr](data - set, _0x2410xb), 0 == _0x2410xb && $(this)[addClass](feature - presenter - highlighted)), _0x2410xa == _0x2410x8 && ($(this)[closest](.feature - presenter - circle - container)[after]( < div class="feature-presenter-text-container" > < div class="feature-presenter-text-heading"
                                    style="-webkit-transform:translate(-150%,0);transform:translate(-150%,0);width:+_0x2410x2[data][parent][text_container_size]+px;font-size:+_0x2410x2[data][parent][heading_font_size]+px" > +_0x2410x2[data][parent][features][_0x2410x7 - 1][heading] + < /div><div class="feature-presenter-text-description" style="-webkit-transform:translate(-150%,0);transform:translate(-150%,0);width:+_0x2410x2[data][parent][text_container_size]+px;font-size:+_0x2410x2[data][parent][description_font_size]+px">+_0x2410x2[data][parent][features][_0x2410x7-1][description]+</div > < /div>),_0x2410x3=$(_0x2410xc)[closest](.feature-presenter-circle-container)[next](),_0x2410x4=_0x2410x3[width](),_0x2410x3[width](_0x2410x4+_0x2410x2[data][parent][other_settings][spacing]),_0x2410x3[css](margin-top,_0x2410x2[data][parent][other_settings][top_margin]+(2*_0x2410x2[data][parent][circle_radius]-_0x2410x3[height]()<=0?0:(2*_0x2410x2[data][parent][circle_radius]-_0x2410x3[height]())/2) + px), _0x2410x3[find](.feature - presenter - text - heading)[addClass](feature - presenter - text - in -+_0x2410x2[data][parent][index]), _0x2410x3[find](.feature - presenter - text - description)[addClass](feature - presenter - text - in -+_0x2410x2[data][parent][index]), _0x2410x2[data][parent][bindEvents]());
}, FeaturePresenter[prototype][textTransitionEndEvent] = function() {
                                        $(this)[remove]()
                                    };