import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RegisterUserVo } from './vo/register-user.vo';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    // create mock auth service
    const mockAuthService = {
      register: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{
        provide: AuthService,
        useValue: mockAuthService
      }],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  describe('register', () => {
    it('should call authService.register with the correct parameters', async () => {
      const registerDto = {
        email: 'test@example.com',
        password: 'password123',
        username: 'testuser'
      };
      
      await controller.register(registerDto);
      
      expect(authService.register).toHaveBeenCalledWith(registerDto);
    });

    // it('should register a user and return success response', async () => {
    //   const registerDto = {
    //     email: 'test@example.com',
    //     password: 'password123',
    //     username: 'testuser'
    //   };
      
    //   const user: RegisterUserVo = {
    //     id: 1,
    //     email: 'test@example.com',
    //     username: 'testuser',
    //     createdAt: new Date(),
    //   };
      
    //   authService.register.mockResolvedValue(user);
      
    //   const result = await controller.register(registerDto);
      
    //   expect(result).toEqual({
    //     message: 'User registered successfully',
    //     data: user
    //   });
    // })
  })
});
