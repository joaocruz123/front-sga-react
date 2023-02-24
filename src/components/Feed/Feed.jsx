import { Avatar, Container, Grid, Stack } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux';
import {
	Div,
	Cirlular
} from './styles'

function Feed(props) {
	const { groups } = props;
	return (
		<Container disableGutters component="main" sx={{ pt: 4, pb: 2 }}>
			<Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
				<Grid container sx={{ justifyContent: "center", alignItems: "center"}} spacing={1}>
					{groups && groups.map((acc, index) => {
						return <Grid item xs={3} md={1} key={`feed-${acc.name}-${index}`}><Div>
							<Cirlular>
								<Avatar alt="Remy Sharp" src={acc.imgUrl} sx={{ width: 62, height: 62 }} />
							</Cirlular>
							<p>{acc.name}</p>
						</Div>
						</Grid>
					})}
				</Grid>
			</Stack>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		groups: state.ui.groups
	};
}

export default connect(
	mapStateToProps, {
})(Feed);
