import React, {
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { StyleSheet, ScrollView } from "react-native";
import data from "./data.json";
import Choice from "./components/Choice";
import Content from "./components/Content";

const initialBlockId = (
  data.blocks.find(({ startBlock }) => !!startBlock) || data.blocks[0]
).blockId;

export default function AppContainer() {
  const scrollRef = useRef();
  const [currentBlockId, setCurrentBlockId] = useState(initialBlockId);
  const [scrollPosition, setScrollPosition] = useState({ y: 0, x: 0 });

  const onScroll = useCallback(({ nativeEvent }) => {
    setScrollPosition(nativeEvent.contentOffset);
  }, []);

  const onContentPress = useCallback(() => {
    scrollRef.current.scrollTo({ y: scrollPosition.y + 100 });
  }, [scrollPosition]);

  const currentBlock = useMemo(
    () => data.blocks.find(({ blockId }) => blockId === currentBlockId),
    [currentBlockId]
  );

  const options = useMemo(
    () => (currentBlock ? [currentBlock.choseOne, currentBlock.choseTwo] : []),
    [currentBlock]
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: 0, animated: false });
    }
  }, [currentBlockId]);

  return (
    <ScrollView
      onScroll={onScroll}
      contentContainerStyle={styles.scrollContainer}
      ref={scrollRef}
      scrollEventThrottle={16}
    >
      <Content content={currentBlock.content} onPress={onContentPress} />
      <Choice options={options} onChoose={setCurrentBlockId} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { paddingVertical: 45, paddingHorizontal: 20 },
});
