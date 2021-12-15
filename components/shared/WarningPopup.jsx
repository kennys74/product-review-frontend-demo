import React, { Component, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class WarningPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isWarningShow: true
        };
    }

    handleYes(e) {
        e.preventDefault();
        this.setState({ isWarningShow: false });
    }

    handleNo(e) {
        e.preventDefault();
        localStorage.setItem('is_not_eighteen',1);
        Router.push(`/`);
    }

    render() {
        const { isWarningShow } = this.state;
        const { active } = this.props;

        if (isWarningShow) {
            return (
                <div
                    className={`ps-popup ${active ? 'active' : ''}`}
                    id="subscribe">
                    <div
                        className="ps-popup__content bg--cover"
                        style={{
                            backgroundImage:
                                "url('/static/img/bg/adult-warning.jpg')",
                        }}>
                        <form
                            className="ps-form--warning-popup"
                            action="/"
                            method="get">
                            <div className="ps-form__content">
                                <h4>
                                   <strong>WARNING</strong>
                                </h4>
                                <p>
                                This site contains sexually oriented adult material intended for individuals 18 years of age or older. This category is designed for ADULTS only and may include pictures and materials that some viewers may find offensive. If you are under the age of 18, if such material offends you or if it is illegal to view such material in your community please do not enter this category. The following terms and conditions apply to this site. Use of the site will constitute your agreement to the following terms and conditions:</p>

                                <ul>
                                    <li>I am 18 years of age or older.</li>
                                    <li>I accept all responsibility for my own actions; and</li>
                                    <li>I agree that I am legally bound to these Terms and Conditions.</li>
                                </ul>

                                <div className="form-group">
                                    <button 
                                        type="button"
                                        className="ps-btn"
                                        onClick={e => this.handleYes(e)}
                                        >Yes I AM 18
                                    </button>
                                    <button 
                                        type="button"
                                        className="ps-btn"
                                        onClick={e => this.handleNo(e)}
                                        >NO IM UNDER 18
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );
        } else {
            return '';
        }
    }
}

export default WarningPopup;
