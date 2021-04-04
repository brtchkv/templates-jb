import Form from 'react-bootstrap/Form'
import "./styles/filterPanel.css"
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {SelectorStyled, FilterForm, Button, ButtonContainer} from "./styles/filterPanel";
import left from "./images/left.png";
import right from "./images/right.png";
import Image from "../../../components/image/Image";

function FilterPanel(props) {
    const {t} = useTranslation();

    const {register, handleSubmit} = useForm({
            mode: 'onChange'
        }
    );

    const sortMethod = [
        {value: "day", label: t('dashboard.filterPanel.filterSelector.sorting.options.day')},
        {value: "week", label: t('dashboard.filterPanel.filterSelector.sorting.options.week')},
        {value: "month", label: t('dashboard.filterPanel.filterSelector.sorting.options.month')},
        {value: "quarter", label: t('dashboard.filterPanel.filterSelector.sorting.options.quarter')},
        {value: "year", label: t('dashboard.filterPanel.filterSelector.sorting.options.year')},
    ];

    const onSubmit = (preferences) => {
        props.setFilteredData(props.startDate.startOf(), preferences.range);
    };

    const prevDate = (e) => {
        e.preventDefault();
        props.setFilteredData(props.startDate.subtract(1, props.filterOption), props.filterOption);
    }

    const nextDate = (e) => {
        e.preventDefault();
        props.setFilteredData(props.startDate.add(1, props.filterOption), props.filterOption,);
    }

    return (
        <FilterForm onChange={handleSubmit(onSubmit)}>
            <div className="course-filters">
                <ButtonContainer>
                    <Button onClick={prevDate}>
                        <Image src={left} size={{width: "25px"}} recolor={true} invert={true}/>
                    </Button>
                </ButtonContainer>
                <div className="course-filter">
                    <Form.Control
                        name="range" as={SelectorStyled} ref={register({type: 'custom'})}
                        className="plp-selector" custom defaultValue={props.filterOption}
                    >
                        {
                            sortMethod.map(function (sort) {
                                return <option key={sort.value} value={sort.value}>{sort.label}</option>
                            })
                        }
                    </Form.Control>
                </div>
                <ButtonContainer>
                    <Button onClick={nextDate}>
                        <Image src={right} size={{width: "25px"}} recolor={true} invert={true}/>
                    </Button>
                </ButtonContainer>
            </div>
        </FilterForm>
    );
}

export default FilterPanel;
