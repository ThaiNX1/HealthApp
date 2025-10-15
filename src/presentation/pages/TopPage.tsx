import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactECharts from 'echarts-for-react';
import { dataService } from '../../data/services/DataService';
import type { FoodItem, MealCategory, BodyRecord } from '../../shared/types/data';
import ProgressConic from '../../shared/components/progress/ProgressConic';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  background-color: #f8f9fa;
`;

const HeroSection = styled.section`
  width: 100%;
  height: 312px;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: start;
`;

const LeftContent = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('../../images/d01.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const RightContent = styled.div`
  flex: 1;
  background: #2E2E2E;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
`;

const ChartTitle = styled.h3`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  margin: 0 0 10px 0;
`;

const ChartContainer = styled.div`
  flex: 1;
  width: 100%;
`;

const MealCategories = styled.div`
  width: 100%;
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const MealButton = styled.button`
  background-image: url('../../icons/meta_button.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  width: 136px;
  height: 136px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    width: 56px;
    height: 56px;
  }
  span{
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 24px;
  }
`;

const FoodGrid = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 160px;
`;

const FoodGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 234px);
  grid-auto-rows: 234px;  
  gap: 8px;
  justify-content: center;
`;

const FoodItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  background: #f0f0f0;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
`;

const FoodImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #e0e0e0 25%, transparent 25%), 
              linear-gradient(-45deg, #e0e0e0 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #e0e0e0 75%), 
              linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 14px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    object-repeat: no-repeat;
  }
`;

const FoodLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 120px;
  height: 32px;
  background: #FFCC21;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-size: 15px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 18px;
  padding: 7px;
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

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
  color: #666;
`;

export const TopPage: React.FC = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [mealCategories, setMealCategories] = useState<MealCategory[]>([]);
  const [bodyRecords, setBodyRecords] = useState<BodyRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [foodResponse, mealResponse, bodyResponse] = await Promise.all([
          dataService.getFoodItems(),
          dataService.getMealCategories(),
          dataService.getBodyRecords()
        ]);

        setFoodItems(foodResponse.data);
        setMealCategories(mealResponse.data);
        setBodyRecords(bodyResponse.data);
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
        data: [65, 60, 55, 50, 48, 43, 38, 30,24, 18, 15, 4],
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
        <HeroSection>
          <LeftContent>
            <ProgressConic
              value={50}
              dateLabel="05/21"
              size={181}
              thickness={4}
              ringTrack={0}
            />
          </LeftContent>
          <RightContent>
            <ChartContainer>
              <ReactECharts 
                option={chartOption} 
                style={{ height: '100%', width: '100%' }}
                opts={{ renderer: 'svg' }}
              />
            </ChartContainer>
          </RightContent>
        </HeroSection>

        <MealCategories>
          {mealCategories.map((meal) => (
            <MealButton key={meal.id}>
              <img src={meal.icon} alt={meal.name} />
              <span>{meal.name}</span>
            </MealButton>
          ))}
        </MealCategories>

        <FoodGrid>
          <div style={{ position: 'relative' }}>
            <FoodGridContainer>
              {foodItems.map((food) => (
                <FoodItem key={food.id}>
                  <FoodImagePlaceholder>
                    <img src={food.image} alt={food.name} />
                  </FoodImagePlaceholder>
                  <FoodLabel>{food.description}</FoodLabel>
                </FoodItem>
              ))}
            </FoodGridContainer>
          </div>
        </FoodGrid>
        <ViewMoreContainer>
          <ViewMoreButton>記録をもっと見る</ViewMoreButton>
        </ViewMoreContainer>
      </MainContent>
    </Container>
  );
};