import ReactECharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dataService } from '../../data/services/DataService';
import type { RecordItem, ExerciseItem, ExerciseDayItem } from '../../shared/types/data';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
`;

const MainContent = styled.main`
  flex: 1;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
`;


const RecordItemContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  margin-top: 56px;
`;

const RecordItem = styled.div`
  width: 288px;
  height: 288px;
  padding: 24px;
  box-sizing: border-box;
  position: relative;
  background: #FFCC21;
`;

const RecordImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    filter: grayscale(100%) brightness(0.4);
    transition: filter 0.3s ease;
  }
`;

const RecordOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const RecordTitle = styled.p`
  color: #FFCC21;
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  line-height: 1.4;
  text-transform: uppercase;
`;

const RecordText = styled.div`
  height: 24px;
  background: #FF963C;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-family: 'Hiragino Kaku Gothic Pro';
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    line-height: 1.4;
    text-transform: uppercase;
    padding: 0 10px;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 304px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
`;

const ChartContent = styled.div`
  width: 960px;
  flex: 1;
  background: #414141;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  padding: 16px 24px;
`;

const ChartTitle = styled.div`
  background: #414141;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 30px;
  span:first-child{
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 400;
    color: #FFFFFF;
  }
  span:last-child{
    font-family: 'Inter';
    font-size: 22px;
    font-weight: 400;
    color: #FFFFFF;
  }
`;

const ChartBottomButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;
  button {
    width: 56px;
    height: 24px;
    border-radius: 11px;
    background: #FFFFFF;
    color: #FFCC21;
  }
`;

const ExerciseContainer = styled.div`
  width: 100%;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  margin-top: 56px;
`;

const ExerciseContent = styled.div`
  width: 960px;
  flex: 1;
  background: #414141;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  padding: 16px 24px;
  overflow: auto;
`;

const ExerciseTitle = styled.div`
  background: #414141;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 30px;
  span:first-child{
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 400;
    color: #FFFFFF;
  }
  span:last-child{
    font-family: 'Inter';
    font-size: 22px;
    font-weight: 400;
    color: #FFFFFF;
  }
`;

const ExerciseItemList = styled.div`
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 8px;
  grid-auto-rows: 40px;
  justify-content: center;
  overflow: auto;
  padding-right: 40px;
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #777777;
    border-radius: 12px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #FFCC21;
    border-radius: 12px;
  }
`;

const ExerciseItem = styled.div`
  width: 100%;
  border-bottom: 1px solid #777777;
  height: 40px;
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 16px;
  span:first-child {
    color: #FFFFFF;
    line-height: 15px;
    font-size: 13px;
  }
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    span:first-child{
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
    }
    span:last-child{
      color: #FFCC21;
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
    }
  }
  span:last-child{
    color: #FFCC21;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
  }
`;

const ExcerciseDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 56px;
`;

const ExcerciseDayTitle = styled.div`
  width: 960px;
  justify-content: center;
  span {
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
  }
`;

const ExcerciseDayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 231px);
  grid-auto-rows: 231px;  
  gap: 12px;
  justify-content: center;
`;

const ExerciseDayItem = styled.div`
  aspect-ratio: 1;
  padding: 16px;
  border: 2px solid #707070;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
  color: #666;
`;

const ViewMoreContainer = styled.div`
  width: 100%;
  padding: 24px 0 64px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ViewMoreButton = styled.button`
  width: 296px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%);
  border: none;
  border-radius: 8px;
  font-family: 'Hiragino Kaku Gothic Pro';
  font-size: 18px;
  font-weight: 300;
  color: #FFFFFF;
  line-height: 26px;
`;

export const MyRecord: React.FC = () => {
    const [recordItems, setRecordItems] = useState<RecordItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [exerciseItems, setExerciseItems] = useState<ExerciseItem[]>([]);
    const [exerciseDayItems, setExerciseDayItems] = useState<ExerciseDayItem[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const recordResponse = await dataService.getRecordItems();
                setRecordItems(recordResponse.data);
                const exerciseResponse = await dataService.getExerciseItems();
                setExerciseItems(exerciseResponse.data);
                const exerciseDayResponse = await dataService.getExerciseDayItems();
                setExerciseDayItems(exerciseDayResponse.data);
            } catch (err) {
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const chartOption = {
        grid: {
            left: '5%',
            right: '5%',
            top: '10%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#777777',
                    type: 'solid'
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#FFFFFF',
                fontSize: 11,
                margin: 12
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                color: '#FFFFFF',
                fontSize: 10
            }
        },
        series: [
            {
                name: 'Weight',
                type: 'line',
                data: [65, 60, 55, 50, 48, 43, 38, 30, 24, 18, 15, 4],
                smooth: false,
                lineStyle: {
                    color: '#FFCC21',
                    width: 3
                },
                itemStyle: {
                    color: '#FFCC21'
                },
                showSymbol: true,
                symbolSize: 8
            },
            {
                name: 'Fat',
                type: 'line',
                data: [68, 55, 46, 45, 44, 29, 35, 24, 20, 19, 18, 10],
                smooth: false,
                lineStyle: {
                    color: '#8FE9D0',
                    width: 3
                },
                itemStyle: {
                    color: '#8FE9D0'
                },
                showSymbol: true,
                symbolSize: 8
            }
        ],
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderColor: 'transparent',
            textStyle: {
                color: '#FFFFFF'
            }
        }
    };

    if (loading) {
        return (
            <Container>
                <MainContent>
                    <LoadingSpinner>読み込み中...</LoadingSpinner>
                </MainContent>
            </Container>
        );
    }

    return (
        <Container>
            <MainContent>
                <RecordItemContent>
                    {recordItems.map((record) => (
                        <RecordItem key={record.id}>
                            <RecordImageWrapper>
                                <img src={record.image} alt={record.title} />
                                <RecordOverlay>
                                    <RecordTitle>{record.title}</RecordTitle>
                                    <RecordText>
                                        <span>{record.description}</span>
                                    </RecordText>
                                </RecordOverlay>
                            </RecordImageWrapper>
                        </RecordItem>
                    ))}
                </RecordItemContent>
                <ChartContainer>
                    <ChartContent>
                        <ChartTitle>
                            <span>BODY <br /> RECORD</span>
                            <span>2021.05.21</span>
                        </ChartTitle>
                        <ReactECharts
                            className='flex-1'
                            option={chartOption}
                            style={{ height: '100%', width: '100%' }}
                            opts={{ renderer: 'svg' }}
                        />
                        <ChartBottomButton>
                            <button>日</button>
                            <button>週</button>
                            <button>月</button>
                            <button>年</button>
                        </ChartBottomButton>
                    </ChartContent>
                </ChartContainer>
                <ExerciseContainer>
                    <ExerciseContent>
                        <ExerciseTitle>
                            <span>MY<br />EXERCISE</span>
                            <span>2021.05.21</span>
                        </ExerciseTitle>
                        <ExerciseItemList>
                            {exerciseItems.map((exercise) => (
                                <ExerciseItem key={exercise.id}>
                                    <span>&#9679;</span>
                                    <div>
                                        <span>{exercise.title}</span>
                                        <span>{exercise.value}</span>
                                    </div>
                                    <span>{exercise.time}</span>
                                </ExerciseItem>
                            ))}
                        </ExerciseItemList>
                    </ExerciseContent>
                </ExerciseContainer>
                <ExcerciseDayContainer>
                    <ExcerciseDayTitle>
                        <span>MY DIARY</span>
                    </ExcerciseDayTitle>
                    <ExcerciseDayGrid>
                        {exerciseDayItems.map((exerciseDay) => (
                            <ExerciseDayItem key={exerciseDay.id}>
                                <span className='text-[18px]'>{exerciseDay.day}</span>
                                <span className='text-[18px]'>{exerciseDay.time}</span>
                                <span className='text-[12px]'>{exerciseDay.title}</span>
                                <span className='text-[12px]'>{exerciseDay.description}</span>
                            </ExerciseDayItem>
                        ))}
                    </ExcerciseDayGrid>
                </ExcerciseDayContainer>
                <ViewMoreContainer>
                    <ViewMoreButton>自分の日記をもっと見る</ViewMoreButton>
                </ViewMoreContainer>
            </MainContent>
        </Container>
    );
};