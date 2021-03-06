import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { CardHeader, ContentMeta } from 'components';

const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  font-size: 14px;
  margin: 0rem 0rem 0.5rem 0rem;
`;

const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding: 0 1rem;
  transition: ${props => props.theme.transitions.boom.transition};
  &:hover{
      transform: scale(1.02);
      box-shadow: ${props => props.theme.shadow.feature.small.l_little};
  }
`;

const Item = styled.div`
  position: relative;
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
`;

const InfoDessc = styled.div`
  width: 100%;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: ${props => props.theme.colors.black.base};
  h1,h2,h3,h4,h5,h6{
    line-height: 30px;
  }
`;

const ImageView = styled.div`
  width: 300px;
  border-radius: ${props => props.theme.borderRadius.default};
  img {
    border-radius: ${props => props.theme.borderRadius.default};
  }
  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: scale(1.02);
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
`;

  const getScrollTop = ()=>{
  　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  　　if(document.body){
  　　　　bodyScrollTop = document.body.scrollTop;
  　　}
  　　if(document.documentElement){
  　　　　documentScrollTop = document.documentElement.scrollTop;
  　　}
  　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  　　return scrollTop;
  }
  //文档的总高度
  const getScrollHeight = ()=>{
  　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  　　if(document.body){
  　　　　bodyScrollHeight = document.body.scrollHeight;
  　　}
  　　if(document.documentElement){
  　　　　documentScrollHeight = document.documentElement.scrollHeight;
  　　}
  　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  　　return scrollHeight;
  }
  const getWindowHeight = ()=>{
  　　var windowHeight = 0;
  　　if(document.compatMode == "CSS1Compat"){
  　　　　windowHeight = document.documentElement.clientHeight;
  　　}else{
  　　　　windowHeight = document.body.clientHeight;
  　　}
  　　return windowHeight;
  }

class PostList extends Component {
  constructor(props){
      super(props)
      this.mounted = true
      this.state = {
        data: [],
        totalCount: 0,
        cursor: 0,
        pageSize: 5,
        isLoading: true,
      }
    }
  
  async componentDidMount() {
    //lazyLoad();
    //this.loadData();
    this.rebuild();
  }
  
  componentWillUnmount(){
    //this.cancelable.cancel()
    if(this.unmount) return  // 已经卸载的话就不执行
    this.setState = (state, callback) => {
        return
    }         
  }

  rebuild = () => {
    const { edges, totalCount } = this.props.data;
    this.setState({ data: this.state.data.concat(edges), totalCount: totalCount, isLoading: false, mounted: false })
  }

  loadData = e => {
    window.addEventListener('scroll', () => {
      if(getScrollTop() + getWindowHeight() == getScrollHeight()){
  　　　　alert("已经到最底部了！!");
  　　}
    })
  }

  render() {
  
    return (
      <Wrapper>
        <CardHeader title="文章" other="" icons={`${'fas', "angle-double-right"}`} path="/blog"></CardHeader>
        {this.props.data&&this.props.data.allMarkdownRemark.edges.map(({ node }) => (
          <StyledLink key={node.id} to={node.frontmatter.path} title={node.frontmatter.title}>
            <Item>
              <ImageView>
                <Img fluid={node.frontmatter.cover.childImageSharp.fluid || {} || [] || ''} />
              </ImageView>
              <InfoDessc>
                <h5>{node.frontmatter.title}</h5>
                <span>{node.excerpt}</span>
                <ContentMeta 
                  tags={node.frontmatter.tags} 
                  date={node.frontmatter.date} 
                  path={node.frontmatter.path}>
                </ContentMeta>
              </InfoDessc>
            </Item>
          </StyledLink>
        ))}
      </Wrapper>
  )};

}

export default props => (
  <StaticQuery
    query={graphql`
      query ($cursor: Int!=0, $pageSize: Int!=10) {
        allMarkdownRemark(
          skip: $cursor
          limit: $pageSize
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          totalCount
          edges {
            node {
              id
              excerpt(pruneLength: 120)
              frontmatter {
                title
                path
                tags
                categores
                special
                date(formatString: "YYYY-MM-DD")
                cover {
                  childImageSharp {
                    fluid(
                      maxWidth: 240
                      quality: 90
                    ) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <PostList data={data} {...props} />}
  />
)

PostList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({      
      totalCount: PropTypes.number,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              categores: PropTypes.string.isRequired,
              special: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};
