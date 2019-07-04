
示例：
```markdown
import {Link} from 'react-router-dom';
import {Loading, StopBox} from "_c/index";

<StopBox stopFunc={()=>{
            return '/login'
        }}>
            <div>
                这里是page3
                <Link to="/">回到首页</Link>
            </div>
        </StopBox>

```