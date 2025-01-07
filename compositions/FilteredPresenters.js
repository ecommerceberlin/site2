
import { WidgetPresenters } from "eventjuicer-site-components"

const FilteredPresenters = ({limit=100, ...props}) => {


    const filter = (item) => "limited" in item && !item.limited > 0

    return  <WidgetPresenters limit={limit} {...props} filter={filter} />

}

export default FilteredPresenters