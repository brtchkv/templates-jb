import Form from 'react-bootstrap/Form'
import "./styles/filterPanel.css"
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {SelectorStyled, FilterForm, Button, ButtonContainer} from "./styles/filterPanel";
import left from "./images/left.png";
import right from "./images/right.png";
import Image from "../../../components/image/Image";
import {Dayjs} from "dayjs";
import {addRange, getStartOf, subtractRange} from "../../../helpers/date";

interface PropsFilter {
    startDate: Dayjs,
    setFilteredData: any,
    filterOption: string,
    className?: string
}

function FilterPanel(props: PropsFilter) {
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

    const onSubmit = (preferences: {range: string}) => {
        props.setFilteredData(getStartOf(props.startDate), preferences.range);
    };

    const prevDate = (e: any) => {
        e.preventDefault();
        props.setFilteredData(subtractRange(props.startDate, props.filterOption), props.filterOption);
    }

    const nextDate = (e: any) => {
        e.preventDefault();
        props.setFilteredData(addRange(props.startDate, props.filterOption), props.filterOption,);
    }

    return (
        <FilterForm onChange={handleSubmit(onSubmit)}>
            <div className="course-filters">
                <ButtonContainer>
                    <Button onClick={(event) => prevDate(event)}>
                        <Image src={left} size={{width: "25px"}} recolor={true} invert={true}/>
                    </Button>
                </ButtonContainer>
                <div className="course-filter">
                    <Form.Control
                        name="range" as={SelectorStyled} ref={register}
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
                    <Button onClick={(event)  => nextDate(event)}>
                        <Image src={right} size={{width: "25px"}} recolor={true} invert={true}/>
                    </Button>
                </ButtonContainer>
            </div>
        </FilterForm>
    );
}

export default FilterPanel;
