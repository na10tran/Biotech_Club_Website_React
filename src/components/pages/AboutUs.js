import React from "react";

import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from '../sections/partials/SectionHeader.js';
import Image from '../elements/Image';
import Footer from '../../components/layout/Footer';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const AboutUs = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Meet the Biotech Board!',
	paragraph: 'The Biotechnology Club educates members about the applications of biotechnology in industrial, medical, and agricultural fields. Club activities mainly consist of listening to guest speakers from the biotechnology industry and getting hands-on experience by touring biotechnology facilities. We also host a career fair during the Winter quarter. Past facility tours include the Microbiology Lab at French Hospital, Baileyana Winery, MedImmune, Promega, and Santa Cruz Biotechnology. Future tours include Genentech, Baxter, and Central Coast Pathology. '
  };
  const mystyle = {
	width :"800px",
	height:"100px",
	alignSelf: 'center'

  };
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
		  <div 	className=" mb-8">
			</div>
          <div className={tilesClasses}>

			<div className="tiles-item-inner">
				<div className="features-tiles-item-header">
					<div className="features-tiles-item-image mb-16">
							<Image
							src={require('./../../assets/images/kae.jpg')}
							alt="Features tile icon 01"
							width={220}
							height={220} />
					</div>
					<div className="features-tiles-item-content">
					<h4 className="mt-0 mb-8">
						Kae Nurge
					</h4>
					<p className="m-0 text-sm">
					President
					</p>
					<p className="m-0 text-sm">
					Molecular & Cell Bio
					</p>
					<p className="m-0 text-sm">
						From Thousand Oaks
					</p>
					<p className="m-0 text-sm">
						Fun Fact : Yes
					</p>
					</div>
				</div>
			</div>


			<div className="tiles-item-inner">
				<div className="features-tiles-item-header">
					<div className="features-tiles-item-image mb-16">
					<Image
						src={require('./../../assets/images/nathan.jpg')}
						alt="Features tile icon 03"
						width={220}
						height={220} />
					</div>
				</div>
				<div className="features-tiles-item-content">
					<h4 className="mt-0 mb-8">
					Nathan Tran
					</h4>
					<p className="m-0 text-sm">
						Event Coordinator
						</p>
						<p className="m-0 text-sm">
						Computer Science
						</p>
						<p className="m-0 text-sm">
							From Los Angeles
						</p>
						<p className="m-0 text-sm">
							Fun Fact : Yes
						</p>
				</div>
			</div>
			<div className="tiles-item-inner">
				<div className="features-tiles-item-header">
					<div className="features-tiles-item-image mb-16">
					<Image
						src={require('./../../assets/images/morgan.jpg')}
						alt="Features tile icon 02"
						width={220}
						height={220} />
					</div>
				<div className="features-tiles-item-content">
					<h4 className="mt-0 mb-8">
					Morgan Boyd
					</h4>
					<p className="m-0 text-sm">
						Vice President!!
						</p>
						<p className="m-0 text-sm">
						Molecular & Cell Bio
						</p>
						<p className="m-0 text-sm">
							From Colorado??
						</p>
						<p className="m-0 text-sm">
							Fun Fact : Yes
						</p>
				</div>
				</div>
			</div>
			<div className="tiles-item-inner">
				<div className="features-tiles-item-header">
					<div className="features-tiles-item-image mb-16">
					<Image
						src={require('./../../assets/images/mori.jpg')}
						alt="Features tile icon 04"
						width={220}
						height={220} />
					</div>
				</div>
				<div className="features-tiles-item-content">
					<h4 className="mt-0 mb-8">
					Mori Morsi
					</h4>
					<p className="m-0 text-sm">
						Secretary
						</p>
						<p className="m-0 text-sm">
						Molecular & Cell Bio
						</p>
						<p className="m-0 text-sm">
							From LMAO IDK
						</p>
						<p className="m-0 text-sm">
							Fun Fact : Yes
						</p>
				</div>
			</div>

			<div className="tiles-item-inner">
				<div className="features-tiles-item-header">
					<div className="features-tiles-item-image mb-16">
					<Image
						src={require('./../../assets/images/guy.jpg')}
						alt="Features tile icon 05"
						width={220}
						height={220} />
					</div>
				</div>
				<div className="features-tiles-item-content">
					<h4 className="mt-0 mb-8">
					Jacob Pogue
					</h4>
					<p className="m-0 text-sm">
						Treasurer
						</p>
						<p className="m-0 text-sm">
						Molecular & Cell Bio
						</p>
						<p className="m-0 text-sm">
							From bruh idek
						</p>
						<p className="m-0 text-sm">
							Fun Fact : Yes
						</p>
				</div>
			</div>
          </div>
        </div>
      </div>
	  <Footer />
    </section>
	
  );
}

AboutUs.propTypes = propTypes;
AboutUs.defaultProps = defaultProps;

export default AboutUs;
