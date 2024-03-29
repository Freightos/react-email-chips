import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

class ChipsList extends Component {
	shouldComponentUpdate(nextProps) {
		return this.props.chips.length !== nextProps.chips.length;
	}

	render() {
		return (
			<Fragment>
				{this.props.chips.map(chip => (
					<span className={classNames({ chip: true, 'not-valid': !chip.valid, 'readonly': this.props.readonly })} key={chip.key}>
						<span className="chip-value">{chip.email}</span>
						<button
							type="button"
							className="chip-delete-button"
							onClick={e => !this.props.readonly && this.props.onChipClick(e, chip)}
						>
							{!this.props.readonly && <span>x</span>}
						</button>
					</span>
				))}
			</Fragment>
		);
	}
}

export default ChipsList;
