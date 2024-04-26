import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import DynamicCardComponent from '../components/DynamicCardComponent'
import GuestFormComponent from '../components/GuestFormComponent'
import StepNavBar from '../components/StepNavBar'
import { PaletteTree } from './palette'

const ComponentPreviews = () => {
	return (
		<Previews palette={ <PaletteTree/> }>
			<ComponentPreview path="/StepNavBar">
				<StepNavBar/>
			</ComponentPreview>
			<ComponentPreview path="/DynamicCardComponent">
				<DynamicCardComponent/>
			</ComponentPreview>
			<ComponentPreview path="/GuestFormComponent">
				<GuestFormComponent/>
			</ComponentPreview>
		</Previews>
	)
}

export default ComponentPreviews