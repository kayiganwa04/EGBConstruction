import React, { useState, useEffect, useRef } from 'react'
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/core'
import Button from './button'

const About: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reset animation state when section goes out of view
        if (!entry.isIntersecting) {
          setIsAnimating(false);
        } else {
          // Trigger animation when section comes into view
          setIsAnimating(true);
        }
      },
      {
        threshold: 0.1 // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box id="about" ref={sectionRef}>
      <Grid templateColumns="repeat(6, 1fr)" marginY="24" alignItems="center">
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
          alignItems="center"
          paddingX={['8', '8', '8', '24', '24']}
          marginX="auto"
          maxW="850px"
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize="5xl"
            fontWeight="normal"
            mb="20px"
            alignSelf="flex-start"
          >
            About us
          </Heading>
          <Text fontSize="md" mb="20px" alignSelf="flex-start" textAlign="left">
            Entreprise Générale du Bâtiment (EGB Ltd) is a distinguished construction company based in Kigali, Rwanda. Established in 2014 by Mr. Bouquin Bonaventure, a civil engineering expert who trained in France, EGB Ltd has consistently delivered exceptional building and utility construction projects throughout Rwanda. Mr. Bonaventure's commitment to Rwanda's construction sector began in 2012, bringing international expertise to the region and actively creating jobs.

            EGB Ltd initially focused on site supervision and house rehabilitation but quickly expanded its services to include the construction of residential homes, luxury apartments, villas, factories, and warehouses. Our expertise spans industrial and residential buildings, office construction, villa and apartment development, civil engineering, landscaping, and architectural design. Additionally, we offer consulting, supervision, and maintenance services, ensuring the longevity and quality of each project.

            Our technical team includes certified engineers, skilled electricians, plumbers, painters, and interior designers. We uphold values of integrity, professionalism, teamwork, and accountability, aiming to be the preferred choice for engineering and construction services in Rwanda.
          </Text>
        </Flex>
        <Box 
          gridColumn="4 / 7" 
          style={{ 
            borderRadius: "10px",
            transition: "all 0.8s ease-in-out",
            transform: isAnimating ? "translateX(0)" : "translateX(100%)",
            opacity: isAnimating ? 1 : 0,
            visibility: "visible",
<<<<<<< HEAD
            position: "relative",
            border: "3px solid #000000",
=======
            position: "relative"
>>>>>>> dd74f84ad4813328d51f38949cd42aa1b8a680da
          }}
        >
          <Image
            src="/projects/Picture26.png"
            display={['none', 'none', 'none', 'block', 'block']}
            borderRadius="5px"
            width="100%"
            style={{
              transition: "transform 0.3s ease-in-out"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
        </Box>
      </Grid>
    </Box>
  )
}

export default About