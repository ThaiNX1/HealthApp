import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { ColumnItem, RecommendedItem } from '../../shared/types/data';
import { dataService } from '../../data/services/DataService';

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

const RecommendedGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 216px);
  grid-auto-rows: 216px;  
  column-gap: 32px;
  justify-content: center;
  margin-top: 56px;
`;

const RecommendedItem = styled.div`
  height: 144px;
  background: #2E2E2E;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  span {
    font-family: 'Inter';
    font-size: 22px;
    font-weight: 400;
    color: #FFCC21;
    line-height: 18px;
  }
  span:last-child {
    font-family: 'Hiragino Kaku Gothic Pro';
    font-size: 18px;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 18px;
  }
  div {
    width: 56px;
    height: 1px;
    background: #FFFFFF;
  }
`;

const ColumnGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 234px);
  grid-auto-rows: 222px;  
  column-gap: 8px;
  row-gap: 18px;
  justify-content: center;
`;

const ColumnItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
  gap: 8px;
`;

const ColumnImagePlaceholder = styled.div`
  width: 100%;
  height: 144px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    object-repeat: no-repeat;
  }
`;

const ColumnLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 144px;
  height: 24px;
  background: #FFCC21;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-size: 15px;
  font-weight: 400;
  color: #FFFFFF;
`;

const ColumnDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-family: 'Hiragino Kaku Gothic Pro';
  font-size: 15px;
  font-weight: 300;
  color: #414141;
`;

const ColumnHashTags = styled.div`
  color: #FFCC21;
  display: flex;
  align-items: center;
  justify-content: start;
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 300;
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

export const ColumnPage: React.FC = () => {
  const [recommendedItems, setRecommendedItems] = useState<RecommendedItem[]>([]);
  const [columnItems, setColumnItems] = useState<ColumnItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const recommendedResponse = await dataService.getRecommendedItems();
        setRecommendedItems(recommendedResponse.data);
        const columnResponse = await dataService.getColumnItems();
        setColumnItems(columnResponse.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
      <MainContent>
        <RecommendedGridContainer>
          {recommendedItems.map((recommended) => (
            <RecommendedItem key={recommended.id}>
              <span>{recommended.title}</span>
              <span>{recommended.category}</span>
              <div></div>
              <span>{recommended.description}</span>
            </RecommendedItem>
          ))}
        </RecommendedGridContainer>
        <ColumnGridContainer>
          {columnItems.map((column) => (
            <ColumnItem key={column.id}>
              <ColumnImagePlaceholder>
                <img src={column.image} alt={column.description} />
                <ColumnLabel>{column.date}</ColumnLabel>
              </ColumnImagePlaceholder>
              <ColumnDescription>{column.description}</ColumnDescription>
              <ColumnHashTags>{column.hashTags}</ColumnHashTags>
            </ColumnItem>
          ))}
        </ColumnGridContainer>
        <ViewMoreContainer>
          <ViewMoreButton>コラムをもっと見る</ViewMoreButton>
        </ViewMoreContainer>
      </MainContent>
    </Container>
  );
};